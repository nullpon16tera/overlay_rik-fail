let rik_fail_count = 0;
let rik_softfail = false;

function skin_rik_fail()
{
  this.isRikFail = false;
  this.$rikFail = $('#rikFail');
  this.$rikFailAppend = $('#rikFailAppend');
  this.$rikFailVideo = this.$rikFail.find('.rik-fail-video');
}

skin_rik_fail.prototype = {
  setup() {
    const params = (new URL(document.location)).searchParams;
    let modifiers = params.get('modifiers');
    let reg = /rik-fail/;

    if (reg.test(modifiers)) {
      this.isRikFail = true;
      this.$rikFailVideo.addClass('active');
    } else {
      this.isRikFail = false;
    }
  },

  finished(data)
  {
    console.log('finished')
    if (rik_softfail) {
      rik_softfail = false;
      return;
    }
    if (0 < rik_fail_count || 0 < rik_softfail_count)
    {
      rik_fail_count--;
      this.$rikFailAppend.find('.rik-fail-video:last').remove();
    }
  },

  failed(data)
  {
    rik_fail_count++;
    var clone = this.$rikFailVideo.eq(0).clone()
    this.$rikFailAppend.append(clone);
  },

  softFailed(data)
  {
    rik_fail_count++;
    rik_softfail = true;
    var clone = this.$rikFailVideo.eq(0).clone()
    this.$rikFailAppend.append(clone);
  },

  menu(data)
  {
    rik_softfail = false;
  },

  init()
  {
    const self = this;
    this.setup();

    if (this.isRikFail)
    {
      ex_failed.push((data) => {
        self.failed(data);
      });
      ex_softFailed.push((data) => {
        self.softFailed(data);
      });
      ex_finished.push((data) => {
        self.finished(data);
      });
      ex_menu.push((data) => {
        self.menu(data);
      });
    }
  }
};

const skin_rikfail = new skin_rik_fail();
skin_rikfail.init();