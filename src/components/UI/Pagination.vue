<template>
  <div class="paggination-buttons">
    <div class="controls-left">
      <a
        class="page-btn start"
        :class="{ disabled: currentPage === 1 }"
        @click.prevent="gotoPage(1)"
      >
        start
      </a>
      <a
        class="page-btn prev"
        :class="{ disabled: currentPage === 1 }"
        @click.prevent="gotoPage(currentPage - 1)"
      >
        prev
      </a>
    </div>
    <a
      :class="{ active: page == currentPage }"
      v-for="page in pageRange"
      class="page-btn"
      @click.prevent="gotoPage(page)"
    >
      {{ page }}
    </a>
    <div class="controls-right">
      <a
        class="page-btn next"
        :class="{ disabled: currentPage == totalPages }"
        @click.prevent="gotoPage(currentPage + 1)"
      >
        next
      </a>
      <a
        class="page-btn end"
        :class="{ disabled: currentPage == totalPages }"
        @click.prevent="gotoPage(totalPages)"
      >
        end
      </a>
    </div>
  </div>
</template>

<script>
import { fetchTotalPageNumber, fetchTotalPageNumberByStore } from '../../Data';

export default {
  props: {
    isStore: {
      default: false,
    },
    storeId: {
      default: null,
    },
  },
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
      if (this.isStore) {
        this.totalPages = await fetchTotalPageNumberByStore(this.storeId);
      } else {
        this.totalPages = await fetchTotalPageNumber();
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang="scss">
.paggination-buttons {
  margin: 4rem 0 10rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .active {
    color: #161a26;
    background-color: #fff;
  }

  a {
    cursor: pointer;
    font-size: 1.8rem;
    color: #fff;
    padding: 0.2rem;

    &:not(.disabled):hover {
      color: #161a26;
    }

    &:nth-child(-n + 1),
    &:nth-last-child(-n + 1) {
      font-weight: 800;
    }
  }

  .disabled {
    cursor: not-allowed;
    color: #a9a9a9;
    pointer-events: none;
  }
}

@media only screen and (max-width: 1400px) {
  .paggination-buttons {
    position: relative;
    gap: 10px;

    a {
      font-size: 1.7em;
      margin-bottom: 0.5rem;
    }

    .controls-left,
    .controls-right {
      position: absolute;
      bottom: -100%;
    }

    .controls-left {
      left: 10%;
    }
    .controls-right {
      right: 10%;
    }
  }
}
</style>
