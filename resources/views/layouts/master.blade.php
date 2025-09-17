<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield("title")</title>
    @vite('resources/css/app.css')
    @vite(['resources/js/chatbot.js'])
    @vite(['resources/js/sidebar.js'])
    <script src="//unpkg.com/alpinejs" defer></script>
    <script src="https://kit.fontawesome.com/98a99c40ed.js" crossorigin="anonymous"></script>
</head>

<body class="h-screen overflow-hidden bg-gradient-to-b from-[#4B5CA8] to-[#1D2442]">

    @yield('content')

</body>

</html>