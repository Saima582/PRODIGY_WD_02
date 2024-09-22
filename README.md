<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <link rel="stylesheet" href="task2.css">
    
    
</head>
<body>
    <div class="container">
        <div class="stopwatch-icon">
            ⏱️ <!-- This is the stopwatch emoji icon -->
        </div>
        <h1>Stopwatch</h1>
        <div id="display">00:00:00</div>
        
        <div class="buttons">
            <button id="startStopBtn" class="btn">Start</button>
            <button id="resetBtn" class="btn">Reset</button>
            <button id="lapBtn" class="btn">Lap</button>
        </div>
        
        <div class="lap-history">
            <h2>Lap History</h2>
            <ul id="laps"></ul> <!-- List to display lap times -->
        </div>
    </div>
    
    <script src="task2.js"></script>
</body>
</html>
