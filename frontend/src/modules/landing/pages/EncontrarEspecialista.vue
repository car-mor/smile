<template>
  <div class="h-screen xl:w-3/4 w-screen absolute bg-[#FFEEE5] flex flex-col items-center">
    <div class="mt-24 text-center flex flex-col items-center">
      <h1 class="text-5xl w-auto sm:w-[500px] md:w-[640px] font-yeseva">
        Encuentra tu especialista y pide tu cita
      </h1>
      <p class="text-xl mt-6 font-serif w-auto sm:w-[400px] md:w-[480px]">
        Decide de que manera te gustaría agendar tu cita
      </p>
      <div class="flex flex-col md:flex-row mt-12 justify-center md:mt-1"></div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>
