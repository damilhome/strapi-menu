import { useEffect, useState } from 'react';
import useGlobalContext from './context/AppContext';
import sublinks from './data';

const Submenu = () => {
    const { pageId, setPageId } = useGlobalContext();
    const [submenuItem, setSubmenuItem] = useState(null);

    useEffect(() => {
        setSubmenuItem(sublinks.find((link) => link.pageId === pageId));
    }, [pageId]);

    if (!submenuItem) {
        return null;
    }

    return (
        <div
            className={`submenu ${pageId ? 'show-submenu' : ''}`}
            onMouseOver={() => setPageId(pageId)}
            onMouseOut={() => setPageId(null)}
        >
            <h5>{submenuItem.page}</h5>
            <div className="submenu-links">
                {submenuItem.links.map((link) => {
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
