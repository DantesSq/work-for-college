import { FC } from 'react';
import background from '../../assets/img/background.jpg';

interface SectionProps {
    title: string;
    text: string[];
    subtitle?: string;
    subtext?: string;
}

const Section: FC<SectionProps> = ({ title, text }) => {
    return (
        <section className="section">
            <img className="section__background" src={background} alt="" />
            <div className="wrapper">
                <div className="section__items">
                    <h1 className="section__title">{title}</h1>
                    <h2 className="section__text">
                        {text.map((text, id) => {
                            return <p key={id}>{text}</p>;
                        })}
                    </h2>
                </div>
            </div>
        </section>
    );
};
export default Section;
