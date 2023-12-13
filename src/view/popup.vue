<template>
	<div class="wrapper">
		<header class="navbar bg-pss flex-md-nowrap p-0 container-fluid">
			<div class="container">
				<a class="navbar-brand" href="javascript:;"><img src="@/assets/images/logo.png"></a>
			</div>
		</header>

		<div class="container p-3">
			<div class="row" v-if="proxyIdConnected > 0 || proxy.length == 0">
				<div class="col-12">
					<div class="title">{{ title }}</div>
				</div>
			</div>

			<div v-if="load && proxyIdConnected == 0 && proxy.length > 0">
				<div class="row">
					<div class="col-12">
						<div class="title">{{ lang["popup-select-proxy"] }}</div>
					</div>
				</div>

				<div class="row mt-2">
					<div class="col-12">
						<div class="change_proxy_list">
							<div v-for="(p, i) in proxy" :key="i" class="mt-1">
								<div class="form-check form-check-circle">
									<input class="form-check-input shadow-none" name="proxy_id" :value="p.id" type="radio"
										:id="'flexRadioDefault_' + p.id" v-model="connectNewProxyId"
										:disabled="proxyIdConnected == p.id">
									<label class="form-check-label ms-2" :for="'flexRadioDefault_' + p.id">
										{{ p.ip }}
										<span class="list_proxy_name ms-2" v-if="p.name">({{ p.name }})</span>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row mt-2">
					<div class="col-12">
						<button type="button" class="btn btn-custom-blue btn-light me-2" :disabled="connectNewProxyId == 0"
							@click.prevent="proxySwitch(connectNewProxyId)">
							{{ lang["popup-button-connect"] }}
						</button>
					</div>
				</div>
			</div>

			<div class="empty-data mt-3 mb-3 p-3" v-if="proxyIdConnected == 0 && proxy.length == 0">
				<div v-if="load">
					<div class="btext">{{ lang["popup-no-proxy"] }}</div>

					<button type="button" class="btn btn-custom-blue btn-light mt-2" v-if="proxy.length == 0"
						@click.prevent="openOptionPage();">
						{{ lang["popup-add-proxy"] }}
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
							<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
								stroke-width="2" d="m10 17l5-5l-5-5" />
						</svg>
					</button>
				</div>
			</div>

			<div class="empty-data mt-3 mb-3 p-3" v-if="proxyIdConnected > 0">
				<div class="d-flex justify-content-start align-items-center flex-wrap">
					<div class="_color_proxy_in_table me-2" :style="{ background: proxyColorConnected }"></div>
					<div class="proxy_host">{{ proxyIpConnected }}</div>
					<div class="proxy_name ms-2" v-if="proxyNameConnected">({{ proxyNameConnected }})</div>
				</div>

				<div class="d-flex justify-content-start align-items-center mt-2">
					<div class="set-offline on-hover" @click.prevent="proxyDisconnect(true);">{{ lang["popup-disconnect-proxy"] }}</div>
				</div>
			</div>

			<div class="row mt-3">
				<div class="links">

					<div class="mb-2">
						<a href="javascript:;" @click.prevent="openOptionPage();">
							<span><img src="@/assets/images/popup-settings.svg"></span>
							{{ lang["popup-menu-settings"] }}
						</a>
					</div>

					<div class="mb-2">
						<a target="_blank" href="https://tools.proxy-solutions.net/">
							<span><img src="@/assets/images/popup-planet.svg"></span>
							{{ lang["popup-menu-my-ip"] }}
						</a>
					</div>

					<div>
						<a href="javascript:;" v-if="!eUser.PS_login" @click.prevent="openOptionPage(true);">
							<span class="text-center"><img src="@/assets/images/popup-auth.svg" class="img-min"></span>
							{{ lang["popup-sign-up"] }}
						</a>
						<a href="javascript:;" v-else @click.prevent="openOptionPage();">
							<span class="text-center"><img src="@/assets/images/popup-auth.svg" class="img-min"></span>
							{{ eUser.PS_login }}
						</a>
					</div>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
import Lang from '@/functions/languages.js';
import postman from '@/functions/postman';
import eUserGet from '@/functions/eUserGet';

export default {
	name: 'popupView',

	data: () => ({
		lang: {},

		title: 'Ваш помощник в управлении прокси!',
		eUser: {},
		user: null,
		page: 'index',

		connectNewProxyId: 0,

		proxyIdConnected: 0,
		proxyIpConnected: null,
		proxyColorConnected: null,
		proxyNameConnected: null,

		proxy: [],
		load: false,

		myBrowser: null,
		myBrowserName: null,
	}),

	methods: {
		proxyDisconnect(notif = false) {
			chrome.runtime.sendMessage({
				cmd: "ext-clear-proxy"
			});

			if (notif === true) {
				chrome.runtime.sendMessage({
					cmd: "ext-show-push",
					title: `ProxySolutions`,
					text: `Отключение от прокси успешно выполнено`
				});
			}

			this.proxyIdConnected = 0;
		},

		proxySwitch: async function (id) {
			const index = this.proxy.findIndex(item => item.id === id);
			const p = this.proxy[index];

			this.proxyDisconnect(false);

			this.proxyIdConnected = p.id;

			chrome.runtime.sendMessage({
				cmd: "ext-show-push",
				title: `ProxySolutions`,
				text: `Подключание к ${p.ip}`
			});

			chrome.runtime.sendMessage(
				{
					cmd: "ext-set-proxy",
					pref: {
						type: p.type,
						hostname: p.ip,
						port: p.port,
						username: p.user,
						password: p.password,
						id: p.id,
						color: p.color,
						name: p.name
					}
				}
			);

			this.page = 'index';

			this.proxyIdConnected = p.id;
			this.proxyIpConnected = p.ip;
			this.proxyColorConnected = p.color;
			this.proxyNameConnected = p.name;

			// chrome.storage.local.set({ proxyIdConnected: p.id });
			// chrome.storage.local.set({ proxyIpConnected: p.ip, proxyColorConnected: p.color, proxyNameConnected: p.name });

			// const TEST = await chrome.storage.local.get(["userId", "proxyIdConnected", "proxyIpConnected", "proxyColorConnected", "proxyNameConnected"]);
			// console.log(TEST)
		},

		openOptionPage: function (openModal = false) {
			if (openModal === true) chrome.storage.local.set({ openModalAuth: 1 });
			chrome.runtime.openOptionsPage();
		},

		onOpened() {
			console.log(`Options page opened`);
		},

		onError(error) {
			console.log(`Error: ${error}`);
		},

		getMyProxy: async function () {
			let data = await postman('my-proxy.php', { user: this.user });

			if (data.error) {
				alert(data.error);
				return;
			}

			this.proxy = data.list;
			this.load = true;
		},

		selectedProxy() {
			this.connectNewProxyId = 0;
			this.page = 'proxy';
		},

		TEST: async function () {
			let ALL = await chrome.storage.local.get(["proxyIdConnected", "proxyIpConnected", "proxyColorConnected", "proxyNameConnected"]);
			console.log(ALL)
		}
	},

	mounted: async function () {
		this.lang = Lang();

		this.eUser = await eUserGet();

		if (process.env.VUE_APP_BROWSER === 'firefox') {
			this.myBrowser = browser;
			this.myBrowserName = 'firefox';
		} else if (process.env.VUE_APP_BROWSER === 'chrome') {
			this.myBrowser = chrome;
			this.myBrowserName = 'chrome';
		}

		const { userId, proxyIdConnected, proxyIpConnected, proxyColorConnected, proxyNameConnected } = await this.myBrowser.storage.local.get(["userId", "proxyIdConnected", "proxyIpConnected", "proxyColorConnected", "proxyNameConnected"]);
		this.user = userId;
		this.proxyIdConnected = proxyIdConnected;
		this.proxyIpConnected = proxyIpConnected;
		this.proxyColorConnected = proxyColorConnected;
		this.proxyNameConnected = proxyNameConnected;

		this.getMyProxy();
	}
}
</script>

<style>
@import '@/assets/bootstrap.min.css';
@import '@/assets/font.css';
@import '@/assets/popup.css';
</style>