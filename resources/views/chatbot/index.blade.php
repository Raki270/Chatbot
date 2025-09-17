@extends('layouts.master')

@section("title", "Chatbot")

@section("content")

<div class="flex">

    <!-- main.blade.php -->
    <div x-data="{ showHistory: false }" class="flex">
        <!-- Sidebar (default) -->
        <div x-show="!showHistory" x-transition>
            @include('parts.sidebar')
        </div>

        <!-- History Sidebar -->
        <div x-show="showHistory" x-transition>
            @include('parts.history')
        </div>
    </div>

    <!-- Content div -->
    <div class="flex-1 flex flex-col gap-10 items-center justify-center">
        <div id="greeting">
            <h1 class="text-white text-center text-[64px] font-bold">Welcome back</h1>
            <p class="text-white text-center text-[46px] font-semibold">How can I help?</p>
        </div>

        <div id="responses" class="px-2 w-[50%] h-[50vh] overflow-y-scroll hidden" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: #6e6e6e #404045;">
            <style>
                #responses::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }

                #responses::-webkit-scrollbar-track {
                    background: #404045;
                    border-radius: 10px;
                }

                #responses::-webkit-scrollbar-thumb {
                    background: #4B5CA8;
                    border-radius: 10px;
                }

                #responses::-webkit-scrollbar-thumb:hover {
                    background: #1D2442;
                }
            </style>
        </div>

        <div class="mt-8 flex h-[20%] w-[50%] border border-white rounded-[26px] overflow-hidden flex-col">
            <div class="flex-1 items-center px-4 flex h-1/2 bg-[#404045] text-white outline-none rounded-[26px] border border-white">
                <input id="message" type="text" class="h-full w-full p-4 rounded-[26px] outline-none">
                <button id="send" class="cursor-pointer">
                    <img src="{{ asset('icons/Exclude.png') }}" alt="" class="w-[34px] h-[34px]">
                </button>
            </div>
           <div class="flex justify-end p-4">
    <div class="relative group">
        <button id="sourcesButton" 
            class="bg-[#404045] rounded-full px-10 py-2 border font-semibold text-white border-white hover:glow hover:cursor-pointer">
            Sources
        </button>

        <!-- Tooltip -->
        <div class="absolute right-0 -top-10 bg-gray-800 text-white text-sm px-2 py-1 rounded-md 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            View sources
        </div>
    </div>
</div>

        </div>
    </div>

    @include("parts.sources")

</div>



@endsection