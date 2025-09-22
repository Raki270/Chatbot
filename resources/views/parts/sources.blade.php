<div id="sources" class="h-screen w-[15%] bg-[#292A2D] flex-col justify-between px-4 py-8 shadow-lg hidden">
    <div class="flex flex-col space-y-10 items-center">
        <h2 class="text-white text-2xl font-bold">
            Извори
        </h2>

        <ul class="text-white text-sm list-disc list-inside">
            <li>DeepSeek</li>
            <li>Комисија за спречување и заштита од дискриминација</li>
        </ul>
    </div>
    <div class="flex justify-center">
        <button id="closeSources" class="bg-[#404045] rounded-full px-4 py-1 border font-semibold text-white border-white hover:glow hover:cursor-pointer">
            <img src="{{ asset('icons/material-symbols_close-rounded.png') }}" alt="" class="w-[15px] h-[15px]">
        </button>
        <style>
            .glow {
                box-shadow: 0 0 10px #404045;
            }
        </style>
    </div>
</div>