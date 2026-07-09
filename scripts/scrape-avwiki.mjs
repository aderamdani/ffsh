const BASE = 'https://av-wiki.net/av-actress/honjou-suzu'

async function fetchPage(page) {
  const url = page === 1 ? BASE : `${BASE}/page/${page}/`
  process.stderr.write(`Fetching page ${page} (${url})...\n`)
  const res = await fetch(url)
  return await res.text()
}

function extractEntries(html) {
  const entries = []
  // Find all entry blocks: <article ...> ... </article>
  // Inside each: title in h2.archive-header-title a[title],
  // code in li i.fa-circle-o + text,
  // date in time[datetime]
  // type in li i.fa-clone + a text

  const titleRegex = /<h2 class="archive-header-title"><a[^>]*title="([^"]+?)"[^>]*>/g
  const codeRegex = /fa-circle-o"><\/i>([A-Z]+-\d+[V]?)/g
  const dateRegex = /<time[^>]*datetime="(\d{4}-\d{2}-\d{2})"/g
  const typeRegex = /fa-clone"><\/i><a[^>]*>([^<]+)</g

  // Extract all matches and pair them up
  const titles = [...html.matchAll(titleRegex)]
  const codes = [...html.matchAll(codeRegex)]
  const dates = [...html.matchAll(dateRegex)]
  const types = [...html.matchAll(typeRegex)]

  // They should be in the same order within each article
  const count = Math.min(titles.length, codes.length, dates.length, types.length)

  for (let i = 0; i < count; i++) {
    let title = titles[i][1].replace(/本庄鈴/g, '').replace(/\s+/g, ' ').trim()
    const code = codes[i][1]
    const date = dates[i][1]
    const type = types[i][1].trim()

    entries.push({ code, title, date, type })
  }

  return entries
}

async function main() {
  const all = []
  for (let page = 1; page <= 12; page++) {
    try {
      const html = await fetchPage(page)
      const entries = extractEntries(html)
      all.push(...entries)
      process.stderr.write(`  got ${entries.length} entries\n`)
    } catch(e) {
      process.stderr.write(`  FAILED: ${e.message}\n`)
    }
  }

  const seen = new Set()
  const unique = all.filter(e => {
    if (seen.has(e.code)) return false
    seen.add(e.code)
    return true
  })

  console.log(JSON.stringify(unique, null, 2))
}

main()
