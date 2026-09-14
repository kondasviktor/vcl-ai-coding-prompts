(function () {
  const root = document.getElementById('catalog-root');
  const countEl = document.getElementById('catalog-count');
  const searchInput = document.getElementById('catalog-search');
  const toolFilter = document.getElementById('tool-filter');
  const categoryFilter = document.getElementById('category-filter');

  let prompts = [];
  const promptById = {};

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  async function copyText(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
      const prev = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = prev; }, 1400);
    } catch (e) {
      btn.textContent = 'Copy failed';
    }
  }

  function fillCategories() {
    const cats = Array.from(new Set(prompts.map(function (p) { return p.category; }))).sort();
    cats.forEach(function (c) {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      categoryFilter.appendChild(opt);
    });
  }

  function render() {
    const q = (searchInput.value || '').trim().toLowerCase();
    const tool = toolFilter.value;
    const cat = categoryFilter.value;

    const rows = prompts.filter(function (p) {
      if (tool && (p.works_with || []).indexOf(tool) === -1) return false;
      if (cat && p.category !== cat) return false;
      if (!q) return true;
      const hay = [
        p.id, p.title, p.category, p.prompt, p.expected_output,
        (p.tags || []).join(' '), (p.works_with || []).join(' ')
      ].join(' ').toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    countEl.textContent = rows.length + ' of ' + prompts.length + ' prompts';

    if (!rows.length) {
      root.innerHTML = '<p class="note">No matches.</p>';
      return;
    }

    root.innerHTML = rows.map(function (p) {
      const chips = (p.works_with || []).map(function (t) {
        return '<span class="chip on">' + escapeHtml(t) + '</span>';
      }).join('');
      const tags = (p.tags || []).map(function (t) {
        return '<span class="chip">' + escapeHtml(t) + '</span>';
      }).join('');
      return (
        '<article class="card" id="p-' + escapeHtml(p.id) + '">' +
          '<h3><code>' + escapeHtml(p.id) + '</code> — ' + escapeHtml(p.title) + '</h3>' +
          '<div class="meta-row">' +
            '<span class="chip">' + escapeHtml(p.category) + '</span>' +
            '<span class="chip">' + escapeHtml(p.difficulty) + '</span>' +
            chips + tags +
          '</div>' +
          '<p class="expected"><strong>Expected:</strong> ' + escapeHtml(p.expected_output) + '</p>' +
          '<details class="prompt-box">' +
            '<summary>Show prompt</summary>' +
            '<div class="prompt"><pre>' + escapeHtml(p.prompt) + '</pre>' +
            '<button type="button" class="copy" data-id="' + escapeHtml(p.id) + '">Copy prompt</button></div>' +
          '</details>' +
        '</article>'
      );
    }).join('');

    root.querySelectorAll('.copy').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const id = btn.getAttribute('data-id') || '';
        copyText((promptById[id] && promptById[id].prompt) || '', btn);
      });
    });
  }

  fetch('prompts.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      prompts = data;
      prompts.forEach(function (p) { promptById[p.id] = p; });
      fillCategories();
      render();
    })
    .catch(function (err) {
      root.textContent = 'Failed to load prompts.';
      console.error(err);
    });

  [searchInput, toolFilter, categoryFilter].forEach(function (el) {
    el.addEventListener('input', render);
    el.addEventListener('change', render);
  });
})();
