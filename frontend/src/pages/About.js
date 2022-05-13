import { motion } from "framer-motion"

export default function About() {
    return (

        <div className="mainContent">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 30, delay: 0.3 }}
            >
                <h1>About</h1>
                <h2>The power of journaling</h2>
                <p>When you were a teenager, you might have kept a diary hidden under your mattress. It was a place to confess your struggles and fears without judgment or punishment. It likely felt good to get all of those thoughts and feelings out of your head and down on paper. The world seemed clearer.</p>

                <p>At InkWellness we believe the benefits of writing down your thoughts and feelings still apply. People now call it <em>journaling</em>. If you struggle with stress, depression, or anxiety, keeping a journal can be a great idea. It can help you gain control of your emotions and improve your mental health.</p>
                <p> One of the ways to deal with any overwhelming emotion is to find a healthy way to express yourself. This makes a journal a helpful tool in managing your mental health. Journaling can help you: </p>

                <ul className="classicList">
                    <li key="1">Manage anxiety</li>
                    <li key="2">Reduce stress</li>
                    <li key="3">Cope with depression</li>
                </ul>

                <p>When you have a problem and you're stressed, keeping a journal can help you identify what&apos;s causing that stress or anxiety. Once you&apos;ve identified your stressors, you can work on a plan to resolve the problems and reduce your stress. Journaling helps control your symptoms and improve your mood by:</p>
                <ul className="classicList">
                    <li key="7">Helping you prioritize problems, fears, and concerns</li>
                    <li key="8">Tracking any symptoms day-to-day so that you can recognize triggers and learn ways to better control them</li>
                    <li key="9">Providing an opportunity for positive self-talk and identifying negative thoughts and behaviors</li>
                </ul>

                <p>Keep in mind that journaling is just one aspect of a healthy lifestyle for better managing stress, anxiety, and mental health conditions. To get the most benefits, be sure you also:</p>

                <ul className="classicList">
                    <li key="4">Relax and meditate each day</li>
                    <li key="5">Eat a healthy, balanced diet</li>
                    <li key="6">Exercise regularly—get in some activity every day</li>
                    <li key="7">Treat yourself to plenty of sleep each night</li>
                    <li key="8">Stay away from alcohol and drugs</li>
                </ul>

                <p><em>Still feel overwhelmed? You can seek assistance and professional help <a href="https://www.mentalhealth.gov/get-help" target="_blank">here</a></em></p>

            </motion.div>
        </div >

    )
}