// Progressive enhancement: the chapter remains readable without JavaScript.
const contents = document.getElementById('page-contents');
const headings = document.querySelectorAll('#article h2[id]');
if (contents && headings.length > 1) {
  const list = contents.querySelector('ul');
  headings.forEach((heading) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    item.appendChild(link);
    list.appendChild(item);
  });
  contents.hidden = false;
}
