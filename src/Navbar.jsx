import { FaBars } from 'react-icons/fa';
import useGlobalContext from './context/AppContext';
import sublinks from './data';

const Navbar = () => {
    const { openSidebar, setPageId } = useGlobalContext();

    return (
        <nav>
            <div className="nav-center">
                <h3 className="logo">strapi</h3>
                <div className="nav-links">
                    {sublinks.map((link) => {
                        const { pageId, page } = link;
                        return (
                            <button
                                className="nav-link"
                                key={pageId}
                                onMouseOver={() => setPageId(pageId)}
                            >
                                {page}
                            </button>
                        );
                    })}
                </div>
                <button className="toggle-btn" onClick={openSidebar}>
                    <FaBars />
                </button>
            </div>
        </nav>
    );
};
export default Navbar;
