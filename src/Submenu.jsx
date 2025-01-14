import { useEffect, useRef, useState } from 'react';
import useGlobalContext from './context/AppContext';
import sublinks from './data';

const Submenu = () => {
    const { pageId, setPageId } = useGlobalContext();
    const submenuContainer = useRef(null);
    const [currentPage, setCurrentPage] = useState(null);

    useEffect(() => {
      if(pageId) {
        setCurrentPage(sublinks.find((link) => link.pageId === pageId));
      }
    }, [pageId])

    const handleMouseLeave = (e) => {
        const submenu = submenuContainer.current;
        const { left, right, bottom } = submenu.getBoundingClientRect();
        const { clientX, clientY } = e;

        if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
            setPageId(null);
        }
    };

    return (
        <div
            className={`submenu ${pageId ? 'show-submenu' : ''}`}
            onMouseLeave={handleMouseLeave}
            ref={submenuContainer}
        >
            <h5>{currentPage?.page}</h5>
            <div
                className="submenu-links"
                style={{
                    gridTemplateColumns:
                        currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
                }}
            >
                {currentPage?.links?.map((link) => {
                    const { id, label, icon, url } = link;
                    return (
                        <a href={url} key={id}>
                            <span>{icon}</span>
                            {label}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
export default Submenu;
