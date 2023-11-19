import { Link } from 'react-router-dom';

export const Banner = () => {
    return (
        <main className="banner-main">
            <h3> ** Welcome. </h3>
            <p> I'm Artur. I have a bachelor's degree in mathematics and I'm currently taking a gap year to explore my
                interests.</p>
            <p> If you wish to find out more about my skills &amp; background check the <Link to="/about">about me</Link> page. </p>
            <p> You can contact me at <Link to="/about"> arturchichorro [at] gmail [dot] com</Link>.</p>
        </main>
    )
}