import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './Context'

function Submenu() {
  const {isSubmenuOpen,page:{page,links},location}=useGlobalContext();
  const container=useRef(null);
  const [columns, setColumns] = useState('col-2');
  useEffect(() => {
    const submenu = container.current;
    const { bottom, center } = location;
     submenu.style.left = `${center}px`;
     submenu.style.top = `${bottom}px`;
     if(links===3){
      setColumns('col-3')
     }
     if(links>3){
      setColumns('col-4');
     }
  }, [page, location, links]);
  
  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`} ref={container}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((e,i)=>{
             const { url, icon, label } = e;
            return (
              <a href={url} key={i}>{icon}{label}</a>
            )
          })}
        </div>
      </section>
    </aside>
  );
}

export default Submenu