<template>
  <section class="privacy-policy">
    <div class="flex flex-col w-full">
      <div class="privacy-policy__title">
        <h1 v-html="content.title"/>
      </div>
      <div class="privacy-policy__container">
        <div class="privacy-policy__container__content">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <ResponsiveImage
              :lazyload="false"
              :sources="content.image.src"
              :alt="content.image.alt"
              class="privacy-policy__image pt-4 lg:pt-0 pb-6 lg:pb-0"
            />
            <div class="privacy-policy__information">
              <p v-html="content.informations[0]" class="privacy-policy__information__text"/>
              <ul class="privacy-policy__list grid grid-cols-1 lg:grid-cols-3 m-auto">
                <li
                  v-for="(item, i) in content.list"
                  :key="i" 
                  class="privacy-policy__item flex flex-col items-center"
                >
                  <ResponsiveImage
                    :lazyload="false"
                    :sources="item.icon.src"
                    :alt="item.icon.alt"
                    class="privacy-policy__list__icon"
                  />
                  <p v-html="item.text" class="text-center"/>
                </li>
              </ul>
              <p v-html="content.informations[1]" class="mb-6"/>
              <Card :content="content.card" class="" />
              <p v-html="content.informations[2]" class="mb-8 lg:mb-0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ResponsiveImage from "~/components/ResponsiveImage";
import Card from "~/components/shared/Card";

export default {
  components: {
    ResponsiveImage,
    Card
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/sizes";
@import "~assets/css/colors";
.privacy-policy {
  background: #fff;
  @include media(">=lg") {
    padding-top: 48px;
    padding-bottom: 60px;
  }
  @include media(">=xl") {
    padding-top: 48px;
  }
  @include media(">=2xl") {
    padding-top: 87px;
  }

  .privacy-policy__title {
    @include media(">=lg") {
      margin: 0 0 0 auto;
      margin-bottom: 32px;
      max-width: 480px;
    }
    @include media(">=xl") {
      max-width: 540px;
    }
    @include media(">=2xl") {
      max-width: 559px;
    }
  }
  .privacy-policy__container {
    .privacy-policy__container__content {
      .grid {
        &:first-child {
          @include media(">=lg") {
            grid-template-columns: auto 480px;
          }
          @include media(">=xl") {
            grid-template-columns: auto 540px;
          }
          @include media(">=2xl") {
            grid-template-columns: auto 559px;
          }
        }
      }
      .privacy-policy__image {
        position: relative;
        margin: auto;
        ::v-deep img {
          margin: auto;
          /*@include media(">=lg") {
            position: absolute;
            left: -6px;
            margin-top: 40px;
          }*/
        }
        @include media(">=lg") {
          margin-left: -55px;
          bottom: -56px;
        }
        @include media(">=xl") {
          margin-left: -55px;
          bottom: -56px;
        }
        @include media(">=2xl") {
          margin-left: -55px;
          bottom: 10px;
        }
      }
      .privacy-policy__information {
        .privacy-policy__information__text {
          margin-bottom: 37px;
          @include media(">=lg") {
            margin-bottom: 39px;
          }
        }
        .privacy-policy__list {
          border: 2px solid $secondary;
          border-radius: 39px;
          padding: 23px 32px;
          column-gap: 29px;
          max-width: 286px;
          margin-bottom: 37px;
          @include media(">=lg") {
            margin-bottom: 39px;
            max-width: 100%;
            grid-template-columns: 192px 129px 112px;
          }
          .privacy-policy__item {
            @include media("<=lg") {
              &:not(:last-child) {
                margin-bottom: 45px;
              }
            }
            .privacy-policy__list__icon {
              margin-bottom: 15px;
            }
          }
        }
      }
    }
  }
}
</style>