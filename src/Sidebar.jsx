import useGlobalContext from './context/AppContext';
import sublinks from './data';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
  
    return (
        <aside
            className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}
        >
            <div className="sidebar-container">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {sublinks.map((link) => {
                        const { pageId, page, links } = link;
                        return (
                            <article key={pageId}>
                                <h4>{page}</h4>
                                <div className="sidebar-sublinks">
                                    {links.map((pageLinks) => {
                                        const { id, label, icon, url } =
                                            pageLinks;
                                        return (
                                            <a href={url} key={id}>
                                                <span>{icon}</span>
                                                {label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};
export default Sidebar;
