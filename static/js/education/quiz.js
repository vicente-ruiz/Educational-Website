function submitQuiz() 
{
    // Define correct answers for each attack type
    const quizData = 
    {
        "keylogger": 
        {
            "q1": "USBs can contain malware",
            "q2": "Unusual sender email addresses"
        },
        "malware": 
        {
            "q1": "Downloading unknown files",
            "q2": "Using outdated software"
        },
        "sqlinjection": 
        {
            "q1": "Input validation prevents injection",
            "q2": "Parameterized queries are safer"
        },
        "mitm": 
        {
            "q1": "Encrypting traffic prevents interception",
            "q2": "Public Wi-Fi is a common attack vector"
        }
    };

    // Detect which page the user is on
    const attackType = window.location.pathname.split("/").pop(); // Gets last part of URL

    const correctAnswers = quizData[attackType] || {}; // Default to empty if attackType not found
    let score = 0;

    for (const [question, correct] of Object.entries(correctAnswers)) 
    {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correct) 
        {
            score++;
        }
    }

    document.getElementById("quiz-result").innerText = "Your Score: " + score + "/" + Object.keys(correctAnswers).length;
}
