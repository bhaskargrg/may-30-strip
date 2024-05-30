import React from 'react'
import { useGlobalContext } from './Context'
import { FaTimes } from 'react-icons/fa';
import links from './Data'
function Sidebar() {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {links.map((e,i)=>{
            const {page,links}=e;
            return (
              <article key={i}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((e,i)=>{
                    const { url, icon, label } = e;
                    return(
                      <a href={url}>{icon}{label}</a>
                    )
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

export default Sidebar