body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: white;
    text-align: center;
}

.app-container {
    padding: 20px;
}

header h1 {
    font-size: 2.5rem;
    margin: 20px 0;
}

button {
    background: #2575fc;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    margin: 10px;
}

button:hover {
    background: #6a11cb;
}

.hidden {
    display: none;
}

#players {
    list-style: none;
    padding: 0;
    margin: 20px 0;
}

#players li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
}

.player-controls button {
    margin-left: 10px;
}

#timer {
    font-size: 1.5rem;
    margin: 20px 0;
}
