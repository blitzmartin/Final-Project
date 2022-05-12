import { motion } from "framer-motion"

export default function About() {
    return (

        <div className="mainContent">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1}}
                transition={{ type: "spring", stiffness: 30, delay: 0.3  }}
            >
            <h1>About</h1>
            <h2>The benefits of journaling</h2>
            <p>When you were a teenager, you might have kept a diary hidden under your mattress. It was a place to confess your struggles and fears without judgment or punishment. It likely felt good to get all of those thoughts and feelings out of your head and down on paper. The world seemed clearer.</p>

            <p>You may have stopped using a diary once you reached adulthood. But the concept and its benefits still apply. Now it&apos;s called journaling. It's simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or anxiety, keeping a journal can be a great idea. It can help you gain control of your emotions and improve your mental health.</p>
            <p> One of the ways to deal with any overwhelming emotion is to find a healthy way to express yourself. This makes a journal a helpful tool in managing your mental health. Journaling can help you:

                <ul className="classicList">
                    <li key="1">Manage anxiety</li>
                    <li key="2">Reduce stress</li>
                    <li key="3">Cope with depression</li>
                </ul>
            </p>

            <p> Journaling helps control your symptoms and improve your mood by: Helping you prioritize problems, fears, and concerns Tracking any symptoms day-to-day so that you can recognize triggers and learn ways to better control them Providing an opportunity for positive self-talk and identifying negative thoughts and behaviors</p>

            <p> When you have a problem and you're stressed, keeping a journal can help you identify what&apos;s causing that stress or anxiety. Once you&apos;ve identified your stressors, you can work on a plan to resolve the problems and reduce your stress.

                Keep in mind that journaling is just one aspect of a healthy lifestyle for better managing stress, anxiety, and mental health conditions. To get the most benefits, be sure you also:

                <ul className="classicList">
                    <li key="4">Relax and meditate each day</li>
                    <li key="5">Eat a healthy, balanced diet</li>
                    <li key="6">Exercise regularly—get in some activity every day</li>
                    <li key="7">Treat yourself to plenty of sleep each night</li>
                    <li key="8">Stay away from alcohol and drugs</li>
                </ul>
            </p>
          </motion.div>
        </div >
   
    )
}