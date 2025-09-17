<div class="h-screen w-full bg-[#292A2D] flex flex-col justify-between px-4 py-8 shadow-lg">
    <div class="flex flex-col space-y-10 items-center">
        <h2 class="text-white text-2xl font-bold flex items-center gap-6">
            <img src="{{ asset('icons/vector.png') }}" alt="" width="15px" height="7.5px">
            History
            <img src="{{ asset('icons/Group.png') }}" alt="" height="37px" width="37px">
        </h2>
    </div>

    <div class="px-2 pl-2">
        <button 
            @click="showHistory = false"
            class="w-10 h-10 flex items-center justify-center hover:bg-red-600 rounded-lg transition"
        >
            <img src="{{ asset('icons/material-symbols_close-rounded.png') }}" alt="">
        </button>
    </div>
</div>
