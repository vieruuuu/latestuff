<template>
  <q-page padding>
    <div class="row q-col-gutter-x-md">
      <div class="col-12 col-md-6">
        <div class="resp-container">
          <iframe
            v-if="$root.useAds || true"
            class="resp-iframe"
            sandbox="allow-scripts allow-forms"
            width="1000"
            height="600"
            src="https://www.rapidvideo.com/e/G16425EHSN"
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
          <q-media-player
            v-else
            type="video"
            background-color="black"
            :muted="muted"
            radius="1rem"
            :autoplay="true"
            :show-big-play-button="true"
            :sources="video.sources"
            :poster="video.poster"
            :tracks="video.tracks"
            track-language="English"
            @ended="onEnded"
          />
        </div>
        <div>
          <q-list :dark="$root.useBlackTheme">
            <q-item class="q-col-gutter-x-md">
              <h5>The Punisher</h5>
            </q-item>
            <q-item class="q-col-gutter-x-md text-body1">
              <p>
                An undercover FBI agent becomes a vigilante assassin and sets
                out to unleash his wrath upon the corrupt businessman who
                slaughtered his entire family at a reunion.
              </p>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <q-list :dark="$root.useBlackTheme">
          <q-expansion-item
            v-if="type === 'series' || type === 'episode'"
            icon="dehaze"
            label="Episode List"
            :value="true"
          >
            <q-list :dark="$root.useBlackTheme">
              <q-item
                class="q-col-gutter-x-md"
                v-for="item in recomended"
                :key="item.key"
                clickable
                v-ripple
              >
                <q-item-section thumbnail>
                  <img
                    :style="{
                      width: 92.5 + 'px',
                      height: 139 + 'px'
                    }"
                    :src="`https://image.tmdb.org/t/p/w185/${item.cover}`"
                  />
                </q-item-section>
                <q-item-section>
                  <h6>{{ item.title }}</h6>
                  <p v-if="!$q.screen.lt.md">
                    Secondary line text. Lorem ipsum dolor sit amet, consectetur
                    adipiscit elit.
                  </p>
                </q-item-section>
                <q-item-section side top>
                  <q-item-label class="text-primary" caption>{{
                    item.type
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item
            icon="dehaze"
            label="Recomended movies"
            :value="type === 'movie'"
          >
            <q-list :dark="$root.useBlackTheme">
              <q-item
                class="q-col-gutter-x-md"
                v-for="item in recomended"
                :key="item.key"
                clickable
                v-ripple
              >
                <q-item-section thumbnail>
                  <img
                    :style="{
                      width: 92.5 + 'px',
                      height: 139 + 'px'
                    }"
                    :src="`https://image.tmdb.org/t/p/w185/${item.cover}`"
                  />
                </q-item-section>
                <q-item-section>
                  <h6>{{ item.title }}</h6>
                  <p v-if="!$q.screen.lt.md">
                    Secondary line text. Lorem ipsum dolor sit amet, consectetur
                    adipiscit elit.
                  </p>
                </q-item-section>
                <q-item-section side top>
                  <q-item-label class="text-primary" caption>{{
                    item.type
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    onEnded() {
      console.log("ended");
    }
  },
  data() {
    return {
      type: "series",
      recomended: this.$root.categories[0].content,
      muted: false,
      overlay: false,
      video: [
        {
          label: "Tears of Steel",
          poster: "statics/media/TearsOfSteel/TearsOfSteel.jpeg",
          sources: [
            {
              src: "http://www.html5videoplayer.net/videos/toystory.mp4",
              type: "video/mp4"
            }
          ],
          tracks: [
            {
              src: "statics/media/TearsOfSteel/TOS-en.vtt",
              kind: "subtitles",
              srclang: "en",
              label: "English"
            },
            {
              src: "statics/media/TearsOfSteel/TOS-de.vtt",
              kind: "subtitles",
              srclang: "de",
              label: "German"
            },
            {
              src: "statics/media/TearsOfSteel/TOS-es.vtt",
              kind: "subtitles",
              srclang: "es",
              label: "Spanish"
            },
            {
              src: "statics/media/TearsOfSteel/TOS-fr-Goofy.vtt",
              kind: "subtitles",
              srclang: "fr",
              label: "French"
            },
            {
              src: "statics/media/TearsOfSteel/TOS-it.vtt",
              kind: "subtitles",
              srclang: "it",
              label: "Italian"
            },
            {
              src: "statics/media/TearsOfSteel/TOS-nl.vtt",
              kind: "subtitles",
              srclang: "nl",
              label: "Dutch"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.resp-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}

.resp-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
