import { useEffect, useState } from "react";

export default function NavLink({ id = '', to = '', children }) {

  const [active, setActive] = useState(''),
        attrs = {
          id: id,
          className: active,
          onClick: () => scrollToAnchor(to)
        }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      adjustActiveClass(to, setActive)
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

    function handleScroll() {adjustActiveClass(to, setActive)}
  }, [setActive])

  return (
    <li>
      <a {...attrs}>{children}</a>
    </li>
  );
}

function scrollToAnchor(to) {
  const anchorElement = document.getElementById(to)
  const behavior = innerWidth >= 1500 ? "smooth" : "instant"

  scrollBy({
    top: anchorElement.getBoundingClientRect().y,
    left: 0,
    behavior
  })
}

function adjustActiveClass(to, setActive) {
  const scrollPos = Math.round(window.scrollY) + 1,
        anchorElement = document.getElementById(to),
        sectionTop = anchorElement.offsetTop,
        sectionBottom = sectionTop + anchorElement.offsetHeight


  if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
    return setActive('active')
  }
  
  setActive('')
}