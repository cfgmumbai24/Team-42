import './goadwork.css';
const GoatCareGuidelines = () => {
    return (
        <div className="container relative top-[90px]">
            <header>
                <h1>Goat Care Guidelines</h1>
            </header>
            <section className="dos-and-donts">
                <h2>Do's and Don'ts for Goats</h2>
                <div className="dos">
                    <h3>Do's</h3>
                    <ul>
                        <li>Provide clean and fresh water daily.</li>
                        <li>Feed goats a balanced diet rich in fiber and minerals.</li>
                        <li>Ensure proper shelter from harsh weather conditions.</li>
                        <li>Regularly monitor goat health and behavior.</li>
                        <li>Implement a vaccination and deworming schedule.</li>
                    </ul>
                </div>
                <div className="donts">
                    <h3>Don'ts</h3>
                    <ul>
                        <li>Don't overfeed or underfeed goats.</li>
                        <li>Avoid sudden changes in diet; introduce new foods gradually.</li>
                        <li>Do not neglect hoof trimming and grooming.</li>
                        <li>Avoid overcrowding in living spaces.</li>
                        <li>Do not allow access to toxic plants or hazardous materials.</li>
                    </ul>
                </div>
            </section>
        </div>);
};

export default GoatCareGuidelines;