<script lang="ts">
  import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { t, locale } from '$lib/translations/translations';

  import IconLocale from '$lib/icons/IconLocale.svelte';
  import IconMenu from '$lib/icons/IconMenu.svelte';

  interface IMenuItem {
    url: string,
    key: string,
    default: string,
    is_active: boolean,
    is_open: boolean,
    submenu: IMenuItem[]|[],
  }

  const MENU: IMenuItem[] = [
    {
      url: '/projects',
      key: 'projects',
      default: 'Projects',
      is_active: false,
      is_open: false,
      submenu: [],
    }, {
      url: '/services',
      key: 'services',
      default: 'Services',
      is_active: false,
      is_open: false,
      submenu: [
        {
          url: '/services/development',
          key: 'development',
          default: 'Development',
          is_active: false,
          is_open: false,
          submenu: [],
        }, {
          url: '/services/deluxe-apartaments',
          key: 'delux',
          default: 'Deluxe apartments',
          is_active: false,
          is_open: false,
          submenu: [],
        }, {
          url: '/services/construction',
          key: 'construction',
          default: 'Construction',
          is_active: false,
          is_open: false,
          submenu: [],
        }, {
          url: '/services/architecture',
          key: 'architecture',
          default: 'Architecture',
          is_active: false,
          is_open: false,
          submenu: [],
        }, {
          url: '/services/consulting',
          key: 'consulting',
          default: 'Consulting',
          is_active: false,
          is_open: false,
          submenu: [],
        },
      ],
    },
    {
      url: '/news',
      key: 'news',
      default: 'News',
      is_active: false,
      is_open: false,
      submenu: [],
    },
    {
      url: '/about-us',
      key: 'about_us',
      default: 'About us',
      is_active: false,
      is_open: false,
      submenu: [],
    }, {
      url: '/contacts',
      key: 'contacts',
      default: 'Contacts',
      is_active: false,
      is_open: false,
      submenu: [],
    },
  ];

  const specialItemList: IMenuItem[] = [{
    url: '/services/deluxe-apartaments',
    key: 'delux',
    default: 'Deluxe apartments',
    is_active: false,
    is_open: false,
    submenu: [],
  }]

  let activeKey = "";
  let scrollY = 0;
  let mobileMenu = false;

  // Reactive
  $: menuList   = getItemList($page.url.pathname, activeKey);
  $: activeMenuItem = getActiveItem(activeKey);
  $: nextLocale = getNextLocale($locale);

  // Methods
  /**
   * Get next locale
   * @param $$locale
   */
  function getNextLocale($$locale: string) {
    return $$locale === 'en' ? 'ru' : 'en';
  }

  /**
   * On change locale click
   * @param lang
   */
  const changeLocale = async (lang: string) => {
    const LANG = lang;
    await locale.set(lang);
    goto(`/change-lang?locale=${LANG}`)
  }

  /**
   * On expandable menu item click
   */
  const onExpandebleMenuItemClick = (key: string): void => {
    activeKey = (activeKey === key) ? "" : key;
  }

  /**
   * On menu item click
   */
  const onMenuItemClick = () => {
    mobileMenu = false;
    if (activeKey !== "") {
      activeKey = "";
    }
  }

  /**
   * Get actual menu
   */
  const getItemList = (pathname: string, $$activeKey: string): IMenuItem[] => {
    return MENU.map(el => {
      el.is_active = $$activeKey === ""
        ? pathname.indexOf(el.url) >= 0
        : el.key === $$activeKey;
      return el;
    });
  }

  /**
   * Get active menu item
   */
  const getActiveItem = ($$activeKey: string): IMenuItem|null => {
    return MENU.find(el => el.key === $$activeKey) || null;
  }

  const openSubmenu = (key: string) => {
    activeKey = (activeKey === key) ? "" : key;
  }

  const closeSubmenu = (key: string) => {
    activeKey = "";
  }

  /**
   * On expand mobile menu
   */
  const onExpandMobileMenu = (): void => {
    if (activeKey.length > 0) {
      activeKey = "";
    }
    else {
      mobileMenu = !mobileMenu;
    }
  }
</script>

<svelte:window bind:scrollY={scrollY}/>

<header
  class="header"
  class:header-blured={scrollY > 300}
  class:header-toggled={ mobileMenu}
>
  <div class="header-inner">
    <a href="/" class="logo" on:click={onMenuItemClick}>
      <img src={ mobileMenu ? `/logo-black.png` : `/logo.svg`} alt="Franz Development">
    </a>

    <div class="mobile-actions flex flex-row lg:hidden space-x-6">
      <button
        class="ml-0 mt-7 flex flex-row space-x-1"
        on:click={() => { changeLocale(nextLocale) }}
      >
        <IconLocale/>
        <span>{nextLocale}</span>
      </button>

      <button
        class="mobile-menu-burger"
        on:click={() => onExpandMobileMenu()}
      >
        {#if mobileMenu}
          {#if activeMenuItem}
            <span class="text-black text-2xl">
              Back
            </span>
          {:else}
            <span class="text-black text-2xl">
              Close &times;
            </span>
          {/if}
        {:else}
          <IconMenu />
        {/if}
      </button>
    </div>

    <nav class="nav">
      <ul>
        {#each menuList as item}
          <li
            class:is-active={item.is_active}
            on:mouseenter={() => {
              if(item.submenu?.length > 0) {
                openSubmenu(item.key)
              }
            }}
            on:mouseleave={() => {
              if(item.submenu?.length > 0) {
                closeSubmenu(item.key)
              }
            }}
          >
            {#if item.submenu?.length > 0}
              <span class="menu-link">
                {$t(`common.pages.${item.key}.title`)}
              </span>
              {#if activeKey === item.key}
                <ul transition:fly={{ y: -20, duration: 200 }}>
                  {#each item.submenu as subitem }
                    <li>
                      {#if subitem.key === "delux"}
                        <a href={subitem.url} on:click={onMenuItemClick} class="!text-lg">
                          {$t(`common.pages.${subitem.key}.title`)}
                          <span class="ongoing desktop">
                            {$t(`common.common.ongoing`)}
                          </span>
                        </a>
                      {:else}
                        <a href={subitem.url} on:click={onMenuItemClick}>
                          {$t(`common.pages.${subitem.key}.title`)}
                        </a>
                      {/if}
                    </li>
                  {/each}
                </ul>
              {/if}
            {:else}
              <a
                href={item.url}
                class="menu-link"
                on:click={onMenuItemClick}
              >
                {$t(`common.pages.${item.key}.title`)}
              </a>
            {/if}
          </li>
        {/each}
      </ul>

      <button
        class="ml-4 pt-1 flex flex-row space-x-1"
        on:click={() => { changeLocale(nextLocale) }}
      >
        <IconLocale/>
        <span>{nextLocale}</span>
      </button>
    </nav>
  </div>
</header>

{#if mobileMenu}
  <aside class="mobile-menu">
    <ul>
      {#if activeMenuItem}
        <ul class="special-list">
          {#each specialItemList as item }
            <li>
              <a href={item.url} on:click={onMenuItemClick}>
                {$t(`common.pages.${item.key}.title`)}
                <span class="ongoing">
                  {$t(`common.common.ongoing`)}
                </span>
              </a>
            </li>
          {/each}
        </ul>
        {#each activeMenuItem.submenu as item }
          <li>
            <a href={item.url} on:click={onMenuItemClick}>
              {$t(`common.pages.${item.key}.title`)}
            </a>
          </li>
        {/each}
      {:else}
        {#each menuList as item }
          <li>
            {#if item.submenu?.length > 0}
              <button on:click={() => onExpandebleMenuItemClick(item.key)}>
                {$t(`common.pages.${item.key}.title`)}
              </button>
            {:else}
              <a href={item.url} on:click={onMenuItemClick}>
                {$t(`common.pages.${item.key}.title`)}
              </a>
            {/if}
          </li>
        {/each}
      {/if}

    </ul>
  </aside>
{/if}

<style lang="scss">
  .mobile-menu {
    @apply fixed inset-0 z-20;
    @apply top-[var(--header-height)];
    @apply h-[calc(100%-var(--header-height))] w-full;
    @apply bg-white;
    @apply text-black text-2xl;
    @apply py-6;
    @apply flex flex-col justify-center;

    ul {
      @apply flex flex-col;
      @apply space-y-5;
      @apply text-center;

      li {
        ul {
          @apply mt-6;

          li {
            @apply text-slate-600  text-3xl;
          }
        }
      }
    }

    .special-list {
      @apply text-xl;

      li {
        a {
          @apply flex flex-col items-center;

          span {
            @apply bg-[var(--color-brown-100)];
            @apply inline-block w-fit rounded-lg mt-1 px-1.5 py-0.5;
            @apply whitespace-nowrap text-sm text-white;
          }
        }
      }
    }
  }

  .header {
    @apply w-full;
    @apply fixed top-0 left-0 right-0 z-30;
    @apply h-[var(--header-height)];
    @apply px-5 lg:px-4;
    @apply transition-colors duration-500 ease-in-out;

    &.header-blured {
      @apply bg-black/70 backdrop-blur-md;
    }

    &:hover {
      @apply bg-[#2C2C2C];
    }

    &-inner {
      @apply flex flex-row justify-between;
      @apply w-full max-w-[var(--max-content-width)] mx-auto;
    }

    .logo {
      @apply pt-5;
    }

    .mobile-menu-burger {
      @apply my-7;
      @apply flex lg:hidden;
    }

    .nav {
      // @apply py-7;
      @apply hidden lg:flex lg:flex-row items-center;

      .menu-link {
        @apply text-white;
        @apply flex px-3 py-1;
        @apply cursor-pointer;
        @apply select-none;
      }

      li.is-active {
        > .menu-link {
          @apply bg-[#B29370];
          @apply rounded-xl;
        }
      }

      > ul {
        @apply flex flex-row;
        @apply space-x-4;

        > li {
          @apply relative;
          @apply py-7;
          > ul {
            @apply block;
            @apply absolute;
            @apply w-[310px];
            @apply top-full left-0;
            @apply bg-[#2C2C2C];
            @apply rounded-b-xl;
            @apply transition-all;

            > li {
              > a {
                @apply text-2xl;
                @apply block;
                @apply px-6 pb-6;
                @apply transition-all;
                @apply relative;

                &:hover {
                  @apply text-[#B29370];
                }
              }
              &:first-child {
                > a {
                  @apply pt-6;
                }
              }
            }
          }
        }
      }
    }

    &.header-toggled {
      @apply bg-white;
      @apply text-black;

      .menu-link {
        @apply text-black;
      }

      li.is-active {
        > .menu-link {
          @apply text-white;
        }
      }
    }

    .submenu {
      @apply fixed inset-x-0 bottom-0 top-[var(--header-height)];
      @apply bg-white;
      @apply text-black text-4xl;
      @apply pt-12;

      &-inner {
        @apply w-full max-w-[var(--max-content-width)] mx-auto;
        @apply grid grid-cols-3;
        @apply relative;

        &--close {
          @apply absolute;
          @apply top-0 right-0;
        }

        ul {
          @apply space-y-12;
          @apply flex flex-col;

          li {
            a {
              @apply inline-block;
              @apply relative;
              @apply transition-all;
              &:hover {
                @apply text-[var(--color-brown-100)];
              }
            }
          }
        }

        .special-list {
          @apply text-2xl;

          li {
            a {
              @apply inline-block;
              @apply relative;
            }
          }
        }
      }
    }

    .ongoing {
      @apply absolute left-[calc(100%+10px)] -top-1;
      @apply bg-[var(--color-brown-100)];
      @apply inline-block rounded-lg px-1.5 py-0.5;
      @apply whitespace-nowrap text-sm text-white;
      &.desktop {
        @apply left-auto right-6 top-1
      }
    }

  }
</style>
