
		// 音楽を流す
		$(function() {
			var audio = $("#audio").get(0);
			var isPlaying = false;
			$("#btn-gold").on("click", function () {
				if (isPlaying) {
					audio.pause();
				} else {
					audio.play();
				}
			});
			audio.onplaying = function() {
				isPlaying = true;
			};
			audio.onpause = function() {
				isPlaying = false;
			};
		});
	
	// コメントを追加したい
	
	// memo追加

	$("main").slideDown(500);

	// １、saveクリックイベント
	$("#save").on("click",function(){
		const v = $("#text_area").val();
		localStorage.setItem("memo",v);
		alert("保存しました！");
	});

		// ２、clearクリックイベント
		$("#clear").on("click",function(){
			localStorage.removeItem("memo");
			alert("削除しました！");
			$("#text_area").val("");
		});

		// ページ読み込み保存データ取得表示

		if(localStorage.getItem("memo")){
			const v = localStorage.getItem("memo")
			$("#text_area").val(v);
		}