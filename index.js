document.addEventListener(
    "DOMContentLoaded",
    function () {
      let skill_points = 0;
      let trend_points = 10;
  
      //合体技のボタン
      // 合体技要素を取得
      const gattaibuttons = document.querySelectorAll(".w-otomo-ss-tab");
      const skillbuttons = document.querySelectorAll(
        ".w-otomo-ss-skill-selector-skill"
      );
      const gattaibutton_totugeki = document.querySelector(
        ".w-otomo-ss-tab.totugeki"
      );
      const gattaibutton_ouen = document.querySelector(".w-otomo-ss-tab.ouen");
      const gattaibutton_karyuuguruma = document.querySelector(
        ".w-otomo-ss-tab.karyuuguruma"
      );
  
      // 突撃隊をクリックした時の処理
      function handleClick1_totugeki(event) {
        var g1Elements = document.getElementsByClassName("g1");
        var g2Elements = document.getElementsByClassName("g2");
        var g3Elements = document.getElementsByClassName("g3");
        var g4Elements = document.getElementsByClassName("g4");
        var g5Elements = document.getElementsByClassName("g5");
        var g6Elements = document.getElementsByClassName("g6");
  
        // 全てのボタンから「_is-active」classを削除
        gattaibuttons.forEach((button) => {
          button.classList.remove("_is-active");
        });
        // クリックされたボタンに「_is-active」classを追加
        event.currentTarget.classList.add("_is-active");
        g1Elements[0].setAttribute("skill-points", "23");
        g2Elements[0].setAttribute("skill-points", "35");
        g3Elements[0].setAttribute("skill-points", "11");
        g4Elements[0].setAttribute("skill-points", "19");
        g5Elements[0].setAttribute("skill-points", "27");
        g6Elements[0].setAttribute("skill-points", "39");
  
        //オトモスキルのボタンから「_is-selected」classを削除
        skillbuttons.forEach((button) => {
          button.classList.remove("_is-selected");
        });
        skill_points = 0;
      }
  
      gattaibutton_totugeki.addEventListener(
        "click",
        handleClick1_totugeki,
        false
      );
  
      // 応援楽団をクリックした時の処理
      function handleClick1_ouen(event) {
        var g1Elements = document.getElementsByClassName("g1");
        var g2Elements = document.getElementsByClassName("g2");
        var g3Elements = document.getElementsByClassName("g3");
        var g4Elements = document.getElementsByClassName("g4");
        var g5Elements = document.getElementsByClassName("g5");
        var g6Elements = document.getElementsByClassName("g6");
  
        // 全てのボタンから「_is-active」classを削除
        gattaibuttons.forEach((button) => {
          button.classList.remove("_is-active");
        });
        // クリックされたボタンに「_is-active」classを追加
        event.currentTarget.classList.add("_is-active");
        g1Elements[0].setAttribute("skill-points", "15");
        g2Elements[0].setAttribute("skill-points", "17");
        g3Elements[0].setAttribute("skill-points", "11");
        g4Elements[0].setAttribute("skill-points", "11");
        g5Elements[0].setAttribute("skill-points", "34");
        g6Elements[0].setAttribute("skill-points", "45");
        //オトモスキルのボタンから「_is-selected」classを削除
        skillbuttons.forEach((button) => {
          button.classList.remove("_is-selected");
        });
        skill_points = 0;
      }
  
      gattaibutton_ouen.addEventListener("click", handleClick1_ouen, false);
  
      // 火竜車をクリックした時の処理
      function handleClick1_karyuuguruma(event) {
        var g1Elements = document.getElementsByClassName("g1");
        var g2Elements = document.getElementsByClassName("g2");
        var g3Elements = document.getElementsByClassName("g3");
        var g4Elements = document.getElementsByClassName("g4");
        var g5Elements = document.getElementsByClassName("g5");
        var g6Elements = document.getElementsByClassName("g6");
  
        // 全てのボタンから「_is-active」classを削除
        gattaibuttons.forEach((button) => {
          button.classList.remove("_is-active");
        });
        // クリックされたボタンに「_is-active」classを追加
        event.currentTarget.classList.add("_is-active");
        g1Elements[0].setAttribute("skill-points", "12");
        g2Elements[0].setAttribute("skill-points", "13");
        g3Elements[0].setAttribute("skill-points", "15");
        g4Elements[0].setAttribute("skill-points", "35");
        g5Elements[0].setAttribute("skill-points", "30");
        g6Elements[0].setAttribute("skill-points", "23");
        //オトモスキルのボタンから「_is-selected」classを削除
        skillbuttons.forEach((button) => {
          button.classList.remove("_is-selected");
        });
        skill_points = 0;
      }
  
      gattaibutton_karyuuguruma.addEventListener(
        "click",
        handleClick1_karyuuguruma,
        false
      );
  
      //トレンドのボタン
      // トレンド要素を取得
      const trendbuttons = document.querySelectorAll(
        ".w-otomo-ss-weapon-tab-inner"
      );
  
      // ボタンをクリックした時の処理
      function handleClick2(event) {
        //クリックされたボタンの点数を取得。
        const trendPoints = parseInt(
          event.currentTarget.getAttribute("trend-points")
        );
  
        if (event.currentTarget.classList.contains("_selected")) {
          trend_points = trendPoints;
        } else {
          trend_points = trendPoints;
        }
        // 全てのボタンから「_selected」classを削除
        trendbuttons.forEach((button) => {
          button.classList.remove("_selected");
        });
  
        // クリックされたボタンに「_selected」classを追加
        event.currentTarget.classList.add("_selected");
      }
  
      // 各ボタンにクリックイベントを追加
      trendbuttons.forEach((button) => {
        button.addEventListener("click", handleClick2, false);
      });
  
      //オトモスキルのボタン
      // ボタンをクリックした時の処理
      function handleClick3(event) {
        //クリックされたボタンの点数を取得。
        const skillPoints = parseInt(
          event.currentTarget.getAttribute("skill-points")
        );
  
        if (event.currentTarget.classList.contains("_is-selected")) {
          skill_points -= skillPoints;
          event.currentTarget.classList.remove("_is-selected");
        } else {
          skill_points += skillPoints;
          event.currentTarget.classList.add("_is-selected");
        }
      }
  
      // 各ボタンにクリックイベントを追加
      skillbuttons.forEach((button) => {
        button.addEventListener("click", handleClick3, false);
      });
  
      //採点ボタンを押したときの挙動を追加
  
      const searchButton = document.getElementById(
        "JsWotomoSkillsimSearchButton"
      );
  
      searchButton.addEventListener("click", () => {
        const resultContainer = document.querySelector(".w-otomo-ss-result");
        //合計点の導出
        let total_points = trend_points + skill_points;
        let monster_img;
        let description;
        if (total_points >= 94) {
          monster_img =
            "https://cdn.discordapp.com/attachments/1072464097825804350/1091548149887283210/3fa7f8c70d72e1b8.jpeg";
          description = "ゴール級上位帯、極限状態級のオトモです！";
        } else if (total_points >= 90) {
          monster_img =
            "https://cdn.discordapp.com/attachments/1072464097825804350/1091548149702742138/c3181f1640070986.jpeg";
          description = "ゴール級中位帯、ゴグマジオス級のオトモです！";
        } else if (total_points >= 87) {
          monster_img =
            "https://cdn.discordapp.com/attachments/1072464097825804350/1091548149513986078/2b884bfafa33042c.jpeg";
          description = "ゴール級下位帯、ラージャン級のオトモです！";
        } else if (total_points >= 82) {
          monster_img =
            "https://cdn.discordapp.com/attachments/1072464097825804350/1091548149287497838/901a5047be0b22e1.jpeg";
          description = "準ゴール級上位帯、ブラキディオス級のオトモです！";
        } else if (total_points >= 76) {
          monster_img =
            "https://cdn.discordapp.com/attachments/1072464097825804350/1091548040667598968/48ca31e27b99e57d.jpeg";
          description = "準ゴール級中位帯、ジンオウガ級のオトモです！";
        } else if (total_points >= 70) {
          monster_img =
            "https://cdn.discordapp.com/attachments/1072464097825804350/1091548040504029224/280eb2ac0a266bf8.jpeg";
          description = "準ゴール級下位帯、フルフル級のオトモです！";
        } else if (total_points >= 60) {
          monster_img =
            "https://cdn.discordapp.com/attachments/1072464097825804350/1091548040298496150/daf87b2d3f0db0e0.jpg";
          description = "愛があれば使える、イャンクック級のオトモです！";
        } else {
          monster_img =
            "https://cdn.discordapp.com/attachments/1072464097825804350/1091547932249051136/0ea51eb33963f065.jpg";
          description = "実用範囲外、クンチュウ級のオトモです！";
        }
        // 要素を作成する
        const newResult = document.createElement("div");
        newResult.classList.add("w-otomo-ss-result");
        newResult.innerHTML = `
        <div class="w-otomo-ss-result-heading">採点結果</div>
        <div class="profile">
          <img class="profile__img" src=${monster_img}>
          <div class="profile__name">${total_points.toString() + "点"}</div>
          <div class="profile__desc">${description}</div>
        </div>
        `;
        if (resultContainer) {
          document
            .getElementById("sim-content")
            .replaceChild(newResult, resultContainer);
        } else {
          document.getElementById("sim-content").appendChild(newResult);
        }
      });
    },
    false
  );
  