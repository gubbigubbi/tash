/**
 * Block: Cover Image
 * @param props (title, subtitle, button text, button link, image)
 */

const CoverImage = props => (
    <section className="cover-image">
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <a>{props.buttonText}</a>
        <style jsx>{`
        .cover-image {
            width: 100%;
            padding: 5rem 0;
            background-image: url('./static/hero.jpg');
        }
        `}</style>
    </section>
)

export default CoverImage