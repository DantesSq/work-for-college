import background from '../../assets/img/background.jpg';
import Section from '../Section/Section';

const Home = () => {
    return (
        <div className="home">
            <Section
                title={'About Us'}
                text={[
                    `KISIT is proud to offer a product that brings people together of different
                        nationalities, age groups, religious beliefs, income levels, political views
                        and create a moment of common ground to say cheers!`,
                ]}
            />
        </div>
    );
};

export default Home;
