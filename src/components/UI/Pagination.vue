<template>
  <div class="paggination-buttons">
    <button
      class="page-btn start"
      :disabled="currentPage === 1"
      @click="gotoPage(1)"
    >
      start
    </button>
    <button
      class="page-btn prev"
      :disabled="currentPage === 1"
      @click="gotoPage(currentPage - 1)"
    >
      prev
    </button>
    <button
      :class="{ active: page == currentPage }"
      v-for="page in pageRange"
      class="page-btn"
      @click="gotoPage(page)"
    >
      {{ page }}
    </button>
    <button
      class="page-btn next"
      :disabled="currentPage == totalPages"
      @click="gotoPage(currentPage + 1)"
    >
      next
    </button>
    <button
      class="page-btn end"
      :disabled="currentPage == totalPages"
      @click="gotoPage(totalPages)"
    >
      end
    </button>
  </div>
</template>

<script>
import { fetchTotalPageNumber } from '../../Data';

export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 0,
      visiblePages: 10,
    };
  },
  computed: {
    pageRange() {
      const halfVisible = Math.floor(this.visiblePages / 2);
      let start = Math.max(1, this.currentPage - halfVisible);
      let end = Math.min(start + this.visiblePages - 1, this.totalPages);

      if (end - start + 1 < this.visiblePages) {
        start = Math.max(1, end - this.visiblePages + 1);
      }

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
  },
  methods: {
    gotoPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.$emit('pageChange', this.currentPage);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    },
    async getData() {
      this.totalPages = await fetchTotalPageNumber();
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth < 900) {
        this.visiblePages = 5;
      }
    },
  },
  created() {
    this.getData();
    window.addEventListener('resize', this.updateScreenWidth());
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth());
  },
};
</script>

<style scoped lang="scss">
.paggination-buttons {
  margin: 4rem 0 10rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  .active {
    color: #161a26;
    background-color: #fff;
  }

  button {
    background: none;
    appearance: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #fff;

    &:not(:disabled):hover {
      color: #161a26;
    }

    &:disabled {
      cursor: not-allowed;
      color: #a9a9a9;
    }

    &:nth-child(-n + 2),
    &:nth-last-child(-n + 2) {
      font-weight: 800;
    }
  }
}
</style>
