<script lang="ts">
    export let searchTerm: string;
    export let setSearchTerm: (value: string) => void;
  </script>
  
  <div class="flex justify-center">
    <div class="bg-[#D9D9D9] p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center">
      <div class="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md">
        <img
          src="https://i.imgur.com/your-image-code.png"
          alt="Profile Avatar"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="w-full bg-[#6C757D] rounded-full p-1 flex items-center">
        <input
          type="text"
          value={searchTerm}
          on:input={(e) => setSearchTerm(e.target.value)}
          placeholder="Search in my posts..."
          class="bg-gray-200 text-gray-800 placeholder-gray-500 rounded-l-full w-full py-2 px-4 focus:outline-none"
        />
      </div>
    </div>
  </div>
  