import { GITHUB_URL } from "@/config";

/**
 * @component
 * Top level component for the about page of the website.
 * 
 * @returns {JSX.Element} A text with links providing info about the project
 */

function About() {
    return (
        <>
            <h2 className="borsok-font">About</h2>
            <p>
                ExQuizIt is a fun quiz game where you can challenge yourself with trivia questions
                across a wide range of topics. Questions are provided by the
                <a
                    href="https://opentdb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-1"
                >
                    Open Trivia Database (OpenTDB)
                </a>, a free and community-driven trivia API.
            </p>
            <p>
                This app is built with React and styled using Bootstrap (Lumen theme)
                with a custom logo using the Borsok font by Hafiz Nur Fauzi and logos by<a
                    href="https://fontawesome.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-1"
                >
                    Font Awesome
                </a>. Feel free to have a look at the code on
                <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-1"
                >
                    Github
                </a>.
            </p>

        </>
    );
}

export default About;