<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield("title")</title>
    @vite('resources/css/app.css')
    @vite(['resources/js/chatbot.js'])
    <script src="//unpkg.com/alpinejs" defer></script>
</head>

<body class="h-screen overflow-hidden bg-gradient-to-b from-[#4B5CA8] to-[#1D2442]">

    @yield('content')

</body>

</html>