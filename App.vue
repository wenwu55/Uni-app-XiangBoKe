<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	.mainColor {
		color: $u-main-color;
	}
	.blackColor {
		color: #000;
	}
	.infoColor {
		color: #B5B5B5;
	}
	.iconCenter {
		align-items: baseline;
	}
	.font700 {
		font-weight: 700;
	}
	.maxW {
		width: 100%;
	}
</style>
