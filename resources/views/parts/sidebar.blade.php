<div class="h-screen w-16 bg-[#292A2D] flex flex-col justify-between py-4">
    <div class="flex flex-col space-y-10 items-center">
        <button class="w-10 h-10 flex items-center justify-center hover:bg-gray-700 rounded-lg transition">
            <img src="{{ asset('icons/Group77.png') }}" alt="">
        </button>

        <div class="space-y-4">
            <button 
                @click="showHistory = true"
                class="w-10 h-8 flex items-center justify-center hover:bg-gray-700 rounded-lg transition"
            >
                <img src="{{ asset('icons/tabler_clock.png') }}" alt="">
            </button>

            <button class="w-10 h-8 flex items-center justify-center hover:bg-gray-700 rounded-lg transition">
                <img src="{{ asset('icons/Bookmark.png') }}" alt="">
            </button>
        </div>
    </div>

    <div class="flex flex-col items-center">
        <button class="w-10 h-10 flex items-center justify-center hover:bg-red-600 rounded-lg transition">
            <img src="{{ asset('icons/material-symbols_close-rounded.png') }}" alt="">
        </button>
    </div>
</div>
