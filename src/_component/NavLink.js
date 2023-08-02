import { useEffect, useState } from "react";

export default function NavLink({ id = '', to = '', children }) {

  const [active, setActive] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      adjustActiveClass()
      window.addEventListener("scroll", adjustActiveClass)
    }

    return () => {
      window.removeEventListener("scroll", adjustActiveClass)
    }

    function adjustActiveClass() {
      const scrollPos = Math.round(window.scrollY),
            anchorElement = document.getElementById(to),
            sectionTop = anchorElement.offsetTop,
            sectionBottom = sectionTop + anchorElement.offsetHeight

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        setActive('active')
      } else {
        setActive('')
      }
    }
  }, [setActive])

  return (
    <li>
      <a
        id={id}
        className={active}
        onClick={() => scrollToAnchor(to)}
      >
        {children}
      </a>
    </li>
  );
}

function scrollToAnchor(to) {
  const anchorElement = document.getElementById(to)
  scrollBy({
    top: anchorElement.getBoundingClientRect().y,
    left: 0,
    // behavior : "smooth"
  })
}