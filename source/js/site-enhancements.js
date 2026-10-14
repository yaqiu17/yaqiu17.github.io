(() => {
  const siteInfo = document.getElementById('site-info')
  if (!siteInfo || siteInfo.querySelector('.site-hero-actions')) return

  const actions = document.createElement('nav')
  actions.className = 'site-hero-actions'
  actions.setAttribute('aria-label', '快速入口')

  const links = [
    { label: '浏览文章', href: '/archives/', primary: true },
    { label: '查看项目', href: '/projects/' }
  ]

  links.forEach(({ label, href, primary }) => {
    const link = document.createElement('a')
    link.className = primary ? 'site-hero-button is-primary' : 'site-hero-button'
    link.href = href
    link.textContent = label
    actions.append(link)
  })

  siteInfo.append(actions)
})()
