  const app = {
    data() {
      return {
        image: [
          {url: "images/1.jpg",
            title: "NSX",
            done: false,
          },
          { url: "images/2.jpg",
              title: "Supra", 
              done: false },

          {url: "images/3.jpg",
            title: "Skyline",
            done: false,
          },
        ],
      };
    },
    methods: {
      toggleDone(index) {
        this.image[index].done = !this.image[index].done;
      },
    },
    computed: {
      countUndone() {
        return this.image.filter((t) => !t.done).length;
      },
    },
  };
  Vue.createApp(app).mount("#app");