<div id="sidebar" class="h-screen w-16 bg-[#292A2D] flex flex-col justify-between py-4">
    <div class="flex flex-col space-y-10 items-center">
        <div class="relative group">
            <button id="newChatButton"
                class="w-10 h-10 flex items-center justify-center hover:bg-gray-700 rounded-lg transition relative">
                <img src="{{ asset('icons/Group77.png') }}" alt="">
            </button>

            <!-- Tooltip -->
            <div class="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div class="max-w-[200px]">
                    <p class="whitespace-pre-wrap">
                        Create new chat
                    </p>
                </div>
            </div>
        </div>


        <div class="space-y-4">
    <!-- History Button -->
    <div class="relative group">
        <button
            @click="showHistory = true"
            class="w-10 h-8 flex items-center justify-center hover:bg-gray-700 rounded-lg transition">
            <img src="{{ asset('icons/tabler_clock.png') }}" alt="">
        </button>

        <!-- Tooltip -->
        <div class="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            History
        </div>
    </div>

    <!-- Favorites Button -->
    <div class="relative group">
        <button class="w-10 h-8 flex items-center justify-center hover:bg-gray-700 rounded-lg transition">
            <img src="{{ asset('icons/Bookmark.png') }}" alt="">
        </button>

        <!-- Tooltip -->
        <div class="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Favorites
        </div>
    </div>
</div>

    </div>

    <div class="flex flex-col items-center">
        <button id="closeSidebar" class="w-10 h-10 flex items-center justify-center hover:bg-red-600 rounded-lg transition">
            <img src="{{ asset('icons/material-symbols_close-rounded.png') }}" alt="">
        </button>
    </div>
</div>

<div id="openSidebar" class="w-10 h-screen hidden items-center justify-center rounded-lg transition">
    <i class="fa-solid fa-arrow-right hover:bg-white text-white hover:text-black p-3 rounded-full"></i>
</div>