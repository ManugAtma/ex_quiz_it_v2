
/**
 * @component
 * A footer that is always displayed.
 * 
 * @returns {JSX.Element} - A footer with copy right info.
 */

function Footer() {
    return (
        <footer className="bg-info text-center mt-auto py-3">
            <div className="container">
                <span className=" borsok-font text-light">© 2025 ExQuizIt</span>
            </div>
        </footer>
    );
}

export default Footer;