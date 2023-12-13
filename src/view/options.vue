<template>
	<div class="main_app">

		<header class="navbar sticky-top bg-pss flex-md-nowrap p-0 shadow container-fluid">
			<div class="container">
				<a class="navbar-brand col-md-3 col-lg-2 me-0" href="javascript:;"><img src="@/assets/images/logo.png"></a>
				<div class="navbar-nav">
					<div class="nav-item text-nowrap">
						<a class="nav-link" ref="link-for-open-modal-auth" href="javascript:;" v-if="!eUser.PS_login"
							@click.prevent="ps_load_my_orders();" data-bs-toggle="modal"
							data-bs-target="#modal-add-proxy-lk">
							{{ lang["header-sign-in"] }}
							<img class="header-sign" src="@/assets/images/header-sign.svg">
						</a>
						<a class="nav-link" style="display: inline-block;" href="javascript:;" v-else>
							{{ eUser.PS_login }}
						</a>
						<a class="nav-link ms-5" style="display: inline-block;" href="javascript:;" v-if="eUser.PS_login"
							@click="exit_PS();">
							{{ lang["header-exit"] }}
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.53846 2L12.4615 2C12.8696 2 13.2609 2.16857 13.5494 2.46863C13.8379 2.76869 14 3.17565 14 3.6V4.4C14 4.61217 13.919 4.81566 13.7747 4.96569C13.6304 5.11571 13.4348 5.2 13.2308 5.2C13.0268 5.2 12.8311 5.11571 12.6868 4.96569C12.5426 4.81566 12.4615 4.61217 12.4615 4.4V3.6L5.53846 3.6L5.53846 16.4H12.4615V15.6C12.4615 15.3878 12.5426 15.1843 12.6868 15.0343C12.8311 14.8843 13.0268 14.8 13.2308 14.8C13.4348 14.8 13.6304 14.8843 13.7747 15.0343C13.919 15.1843 14 15.3878 14 15.6V16.4C14 16.8243 13.8379 17.2313 13.5494 17.5314C13.2609 17.8314 12.8696 18 12.4615 18H5.53846C5.13044 18 4.73912 17.8314 4.4506 17.5314C4.16209 17.2313 4 16.8243 4 16.4L4 3.6C4 3.17565 4.16209 2.76869 4.4506 2.46863C4.73912 2.16857 5.13044 2 5.53846 2Z"
									fill="currentColor"></path>
								<path
									d="M13.9568 13.744C14.2549 14.0853 14.7363 14.0853 15.0343 13.744L17.7763 10.6036C17.9195 10.4395 18 10.2169 18 9.98484C18 9.75276 17.9195 9.53018 17.7763 9.36605L15.0343 6.22569C14.8891 6.07532 14.6989 5.99462 14.5032 6.00028C14.3074 6.00594 14.1211 6.09752 13.9826 6.2561C13.8442 6.41467 13.7642 6.62811 13.7593 6.8523C13.7543 7.07649 13.8248 7.29428 13.9561 7.46065L15.3897 9.1096H8.76419C8.56151 9.1096 8.36714 9.20181 8.22383 9.36595C8.08051 9.53009 8 9.75271 8 9.98484C8 10.217 8.08051 10.4396 8.22383 10.6037C8.36714 10.7679 8.56151 10.8601 8.76419 10.8601H15.3897L13.9561 12.509C13.8134 12.6731 13.7334 12.8952 13.7335 13.1267C13.7337 13.3582 13.814 13.5802 13.9568 13.744Z"
									fill="currentColor"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</header>

		<div class="container">
			<div class="row mb-4">

				<div class="col-3">
					<div class="custom-sidebar pt-5">
						<div class="links">
							<div><a href="" :class="{ 'active': page == 'settings' }" @click.prevent="page = 'settings'">{{
								lang["main-menu-proxy"] }}</a>
							</div>

							<div><a href="javascript:;" :class="{ 'active': page == 'templates' }"
									@click.prevent="page = 'templates'">{{ lang["main-menu-templates"] }}</a></div>

							<div><a target="_blank" href="https://tools.proxy-solutions.net/" class="me-1">{{
								lang["main-menu-my-ip"] }}</a>
								<Icon icon="quill:link-out" :style="{ fontSize: '14px', color: 'gray' }" />
							</div>

							<div><a href="javascript:;" :class="{ 'active': page == 'log' }"
									@click.prevent="page = 'log'">{{ lang["main-menu-log"] }}</a></div>

							<div>
								<a href="javascript:;" class="me-1" @click.prevent="page = 'about'">{{
									lang["main-menu-about"] }}</a>
							</div>

							<div>
								<div class="dropdown">
									<a class="dropdown-toggle" type="button" id="dropdownMenuButton1"
										data-bs-toggle="dropdown" aria-expanded="false">
										<Icon class="me-1" :style="{ fontSize: '20px' }" :icon="Lang(true).icon" />
										{{ Lang(true).currentLanguage }}
									</a>
									<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

										<li @click.prevent="changeLanguage('ru')">
											<a class="dropdown-item" href="javascript:;">
												<Icon icon="emojione-v1:flag-for-russia" />
												Русский
											</a>
										</li>

										<li @click.prevent="changeLanguage('en')">
											<a class="dropdown-item" href="javascript:;">
												<Icon icon="la:flag-usa" />
												English
											</a>
										</li>

										<li @click.prevent="changeLanguage('ua')">
											<a class="dropdown-item" href="javascript:;">
												<Icon icon="emojione-v1:flag-for-ukraine" />
												Український
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- настройки прокси -->
				<div class="col-9" v-if="page == 'settings'">
					<div class="pt-5">
						<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
							<h1 class="title">{{ lang["proxy-title"] }}</h1>
							<div class="custom-switch">
								<label class="custom-switch-label">
									{{ lang["proxy-sync"] }}
									<span data-cooltipz-dir="bottom" data-cooltipz-size="medium"
										:aria-label="lang['proxy-sync-tooltip']">
										<img src="@/assets/images/question.svg" class="ms-1 me-1">
									</span>
								</label>
								<div class="form-check form-switch">
									<input class="form-check-input shadow-none on-hover" type="checkbox" role="switch"
										v-model="synchronization" @change="synchronizationSwitch()">
								</div>
							</div>
						</div>

						<div class="page-buttons mt-3">
							<button type="button" class="btn btn-custom btn-light me-2" data-bs-toggle="modal"
								data-bs-target="#modal-add-proxy">
								<img src="@/assets/images/add-proxy.svg">
								{{ lang["proxy-button-add"] }}
							</button>

							<button type="button" class="btn btn-custom btn-light me-2" data-bs-toggle="modal"
								@click.prevent="ps_load_my_orders();" data-bs-target="#modal-add-proxy-lk">
								<img src="@/assets/images/add-proxy-lk.svg">
								{{ lang["proxy-button-add-lk"] }}
							</button>

							<button type="button" class="btn btn-custom btn-light me-2" data-bs-toggle="modal"
								data-bs-target="#modal-import-proxy">
								<img src="@/assets/images/add-proxy-import.svg">
								{{ lang["proxy-button-import"] }}
							</button>
						</div>

						<!-- загружаем прокси юзера -->
						<div v-if="!loaded" style="margin-top: 90px;">
							<div class="text-center">
								<div class="spinner-border text-primary-custom" role="status"></div>
							</div>
						</div>
						<!-- после загрузки прокси юзера -->
						<div v-else>

							<!-- если нет добавленных прокси -->
							<div class="empty-data text-center mt-4 p-4" v-if="proxy.length == 0">
								<div class="btext">{{ lang["proxy-empty-title"] }}</div>
								<div class="mtext mt-2">{{ lang["proxy-empty-info'"] }}</div>
								<div class="mt-4">
									<button type="button" class="btn btn-custom-blue btn-light" data-bs-toggle="modal"
										data-bs-target="#modal-add-proxy">
										{{ lang["proxy-empty-add"] }}
										<img src="@/assets/images/add-white.svg" class="ms-1">
									</button>
								</div>
							</div>
							<!-- если есть добавленные прокси -->
							<div v-else>


								<!-- <div class="page-buttons mt-4" v-if="templates.length > 0">
									<div class="dropdown">
										<button class="btn btn-custom dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Использовать прокси по шаблону и порядку</button>
										<ul class="dropdown-menu">
											<li v-for="(t, it) in templates" :key="it"><a class="dropdown-item" href="javascript:;">{{ t.name }}</a></li>
										</ul>
									</div>

									<select class="form-select form-select-custom shadow-none" v-model="useProxyTemplate"
										@change="useProxyTemplateChange()">
										<option value="0" disabled hidden selected>
											Использовать прокси по шаблону и порядку
										</option>
										<option value="-1" v-if="useProxyTemplate > 0">Отключить опцию</option>
										<option v-for="(t, it) in templates" :key="it" :value="t.id">{{ t.name }}</option>
									</select>
								</div> -->

								<div class="mt-4">
									<table class="table">
										<thead>
											<tr>
												<!-- <th scope="col" class="tw-mim"></th> -->
												<th scope="col" class="tw-mim align-middle">
													<div class="form-check form-check-cube">
														<input class="form-check-input shadow-none" type="checkbox"
															v-model="multi_delete_proxies_all"
															@change="toggleSelectAllProxyDeleted">
													</div>
												</th>
												<th scope="col" class="align-middle">{{ lang["proxy-table-th1"] }}</th>
												<th scope="col" class="align-middle">{{ lang["proxy-table-th2"] }}</th>
												<th scope="col" class="align-middle">{{ lang["proxy-table-th3"] }}</th>
												<th scope="col" class="align-middle" width="1">{{ lang["proxy-table-th4"] }}
												</th>
											</tr>
										</thead>

										<tbody>
											<tr v-for="(p, i) in proxy" :key="i">
												<!-- <td class="align-middle tw-mim tw-mim-wh-br text-center">
													<img src="@/assets/images/drag.svg">
												</td> -->

												<td class="align-middle tw-mim tw-mim-wh-br text-center">
													<div class="form-check form-check-cube">
														<input class="form-check-input shadow-none" type="checkbox"
															v-model="multi_delete_proxies" :value="p.id"
															:disabled="proxyIdConnected === p.id"
															@change="updateSelectAllProxyDeleted">
													</div>
												</td>

												<td class="align-middle">{{ p.name }}</td>

												<td class="align-middle">{{ p.ip }}</td>

												<td class="align-middle">
													<div class="_color_proxy_in_table" :style="{ background: p.color }">
													</div>
												</td>

												<td class="align-middle t-action">
													<div class="d-flex">
														<div class="custom-switch">
															<div class="form-check form-switch">
																<input class="form-check-input shadow-none on-hover"
																	type="checkbox" role="switch"
																	:checked="proxyIdConnected === p.id"
																	@change="proxySwitch(p.id, $event);">
															</div>
														</div>

														<button type="button" class="btn btn-light btn-custom-blue-min ms-4"
															@click.prevent="page = 'templates'">{{
																lang["proxy-table-b-templates"] }}</button>

														<img class="on-hover ms-4" src="@/assets/images/edit.svg"
															v-if="proxyIdConnected !== p.id"
															@click.prevent="openModalEditProxy(p.id)">

														<img class="on-hover ms-4" src="@/assets/images/delete.svg"
															v-if="proxyIdConnected !== p.id" data-bs-toggle="modal"
															data-bs-target="#modal-delete-single-proxy"
															@click.prevent="deleteProxyConfirm(p.id)">
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div class="mt-5 d-flex flex-row-reverse" v-if="multi_delete_proxies.length > 0">
									<button class="btn btn-custom-blue btn-light btn-h48 btn-custom-blue-shadow"
										data-bs-toggle="modal" data-bs-target="#modal-delete-multi-proxy">
										{{ lang["proxy-del-selected"] }}
										<Icon icon="iconamoon:arrow-right-2-duotone" :style="{ fontSize: '20px' }" />
									</button>
								</div>

							</div>

						</div>
					</div>
				</div>

				<!-- настройки шаблонов -->
				<div class="col-9" v-if="page == 'templates'">
					<div class="pt-5">
						<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
							<h1 class="title">{{ lang["templates-title"] }}</h1>
						</div>

						<div class="page-buttons mt-3" v-if="templates_load && templates.length > 0">
							<button type="button" class="btn btn-custom btn-light me-2" data-bs-toggle="modal"
								data-bs-target="#modal-add-template">
								<img src="@/assets/images/add-proxy.svg">
								{{ lang["templates-new"] }}
							</button>
						</div>

						<!-- загружаем шаблоны юзера -->
						<div v-if="!templates_load" style="margin-top: 90px;">
							<div class="text-center">
								<div class="spinner-border text-primary-custom" role="status"></div>
							</div>
						</div>
						<!-- после загрузки шаблонов юзера -->
						<div v-else>

							<!-- если нет добавленных шаблонов -->
							<div class="empty-data text-center mt-4 p-4" v-if="templates.length == 0">
								<div class="btext">{{ lang["templates-empty"] }}</div>
								<div class="mt-4">
									<button type="button" class="btn btn-custom-blue btn-light" data-bs-toggle="modal"
										data-bs-target="#modal-add-template">
										{{ lang["templates-empty-new"] }}
										<img src="@/assets/images/add-white.svg" class="ms-1">
									</button>
								</div>
							</div>
							<!-- если есть добавленные шаблоны -->
							<div v-else>
								<div class="mt-4">
									<table class="table">
										<thead>
											<tr>
												<th scope="col" class="align-middle">{{ lang["templates-table-th1"] }}</th>
												<th scope="col" class="align-middle">{{ lang["templates-table-th2"] }}</th>
												<th scope="col" class="align-middle">{{ lang["templates-table-th3"] }}</th>
												<th scope="col" class="align-middle">{{ lang["templates-table-th4"] }}</th>
												<th scope="col" class="align-middle" width="1">{{
													lang["templates-table-th4"] }}</th>
											</tr>
										</thead>

										<tbody>
											<tr v-for="(t, i) in templates" :key="i">
												<td class="align-middle">{{ t.name }}</td>

												<td class="align-middle">{{ t.template }}</td>

												<td class="align-middle">
													{{ templateTypeGet(t.type) }}
												</td>

												<td class="align-middle">
													{{ templateSslOptGet(t.ssl_option) }}
												</td>

												<td class="align-middle t-action">
													<div class="d-flex">
														<div class="custom-switch">
															<div class="form-check form-switch">
																<input class="form-check-input shadow-none on-hover"
																	type="checkbox" role="switch" :checked="t.online === 1"
																	@change="templateSwitch(t.id, $event);">
															</div>
														</div>

														<img class="on-hover ms-4" src="@/assets/images/edit.svg"
															@click.prevent="openModalEditTemplate(t.id)">

														<img class="on-hover ms-4" src="@/assets/images/delete.svg"
															v-if="t.online === 0" data-bs-toggle="modal"
															data-bs-target="#modal-delete-single-template"
															@click.prevent="deleteTemplateConfirm(t.id)">
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

						</div>
					</div>
				</div>

				<!-- лог -->
				<div class="col-9" v-if="page == 'log'">
					<div class="pt-5">
						<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
							<h1 class="title">{{ lang["log-title"] }}</h1>
							<div class="custom-switch">
								<label class="custom-switch-label">
									{{ lang["log-label"] }}
									<span data-cooltipz-dir="bottom" data-cooltipz-size="medium"
										:aria-label="lang['log-tooltip']">
										<img src="@/assets/images/question.svg" class="ms-1 me-1">
									</span>
								</label>
								<div class="form-check form-switch">
									<input class="form-check-input shadow-none on-hover" type="checkbox" role="switch"
										v-model="logEnabled" @change="logSwitch();">
								</div>
							</div>
						</div>

						<div class="row mt-3">
							<div class="col-12 info-text">
								{{ lang["log-description"] }}
							</div>
						</div>

						<div class="row mt-5">
							<div class="col-12">
								<table class="table">
									<thead>
										<tr>
											<th scope="col" class="align-middle">{{ lang["log-table-th1"] }}</th>
											<th scope="col" class="align-middle">{{ lang["log-table-th2"] }}</th>
											<th scope="col" class="align-middle text-nowrap">{{ lang["log-table-th3"] }}
											</th>
											<th scope="col" class="align-middle">{{ lang["log-table-th4"] }}</th>
										</tr>
									</thead>

									<tbody>
										<tr v-for="(l, i) in logList" :key="i">
											<td class="align-middle text-nowrap">{{ l.added }}</td>

											<td class="align-middle text-nowrap">
												<span v-if="!l.proxy_ip">{{ lang["log-table-no-proxy"] }}</span>
												<span v-else>{{ l.proxy_ip }}</span>
											</td>

											<td class="align-middle text-nowrap">
												<span v-if="!l.proxy_ip">&mdash;</span>
												<span v-else>{{ l.proxy_name }}</span>
											</td>

											<td class="align-middle">
												{{ l.url }}
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div class="col-12 mt-3">
								<span class="log-info fs-14">{{ lang["log-info"] }}</span>
							</div>
						</div>
					</div>
				</div>

				<!-- о нас -->
				<div class="col-9" v-if="page == 'about'">
					<div class="pt-5">
						<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
							<h1 class="title">{{ lang["about-title"] }}</h1>
						</div>

						<div class="row mt-3 text-about">
							<div class="col-12">
								<div class="mb-2">The extension was released by <a target="_blank"
										href="https://proxy-solutions.net">proxy-solutions.net</a></div>
								<div class="mb-2">Copyright 2020-2023 Proxy-Solutions</div>
								<div class="mb-2">All rights reserved.</div>

								<div class="mt-4">Communication with us: <a
										href="mailto:info@proxy-solutions.net">info@proxy-solutions.net</a></div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

		<!-- Modal Import Proxy -->
		<div v-if="page == 'settings'" class="modal fade" id="modal-import-proxy" tabindex="-1" aria-hidden="true"
			data-bs-backdrop="static" data-bs-keyboard="false">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<form class="modal-content custom-form position-relative" @submit.prevent="import_proxy();">
					<div class="modal-header">
						<div class="modal-title">{{ lang["modal-import-title"] }}</div>
						<button ref="CloseModalImportAdd" type="button" class="btn-close shadow-none"
							data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="fs-15 position-absolute text-muted" style="top: 54px; left: 16px;font-weight: 500;">{{
						lang["modal-import-select-template"] }}</div>

					<div class="modal-body mt-3">
						<div class="row">
							<div :class="{ 'col-6': proxy_import.template == 999, 'col-12': proxy_import.template != 999 }">
								<label class="form-label">{{ lang["modal-import-select-template-label"] }}</label>
								<select class="form-select form-select-custom-form" v-model="proxy_import.template">
									<option value="0" disabled hidden>{{ lang["modal-import-select-option-0"] }}</option>

									<option value="3">host:port</option>

									<option value="1">host:port:user:pass</option>
									<option value="2">user:pass:host:port</option>

									<option value="4">user:pass@host:port</option>
									<option value="5">host:port|user:pass</option>
									<option value="6">host:port@user:pass</option>

									<option value="999">{{ lang["modal-import-select-option-999"] }}</option>
								</select>
							</div>

							<div class="col-6" v-if="proxy_import.template == 999">
								<label class="form-label">{{ lang["modal-import-input-mask"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									placeholder="host:port:user:pass" v-model="proxy_import.custom_template" required>
							</div>
						</div>

						<div class="row mt-3" v-if="proxy_import.template == 999">
							<div class="col-12 mb-2 fs-14">
								<span class="label-template-name">host</span> &mdash; {{ lang["modal-import-mask-host"] }}
							</div>
							<div class="col-12 mb-2 fs-14">
								<span class="label-template-name">port</span> &mdash; {{ lang["modal-import-mask-port"] }}
							</div>
							<div class="col-12 mb-2 fs-14">
								<span class="label-template-name">user</span> &mdash; {{ lang["modal-import-mask-user"] }}
							</div>
							<div class="col-12 fs-14">
								<span class="label-template-name">pass</span> &mdash; {{ lang["modal-import-mask-pass"] }}
							</div>
						</div>

						<div class="row mt-3">
							<div class="col-12">
								<label class="form-label">{{ lang["modal-import-input-label"] }}</label>
								<textarea class="form-control form-control-custom-textarea shadow-none"
									v-model="proxy_import.text" placeholder="Вставьте список" required></textarea>
							</div>
						</div>

						<div class="row mt-2">
							<div class="col-12">
								<div class="form-check form-switch">
									<input class="form-check-input on-hover shadow-none" type="checkbox" role="switch"
										id="proxy_import_replace_current" v-model="proxy_import.replace_model">
									<label class="form-check-label-sw" for="proxy_import_replace_current">
										{{ lang["modal-import-replaced"] }}
										<span data-cooltipz-dir="top" data-cooltipz-size="medium"
											:aria-label="lang['modal-import-replaced-tooltip']">
											<img src="@/assets/images/question.svg" class="ms-1 me-1">
										</span>
									</label>
								</div>
							</div>
						</div>
					</div>

					<div class="modal-footer">
						<button type="submit" class="btn btn-custom-blue btn-light btn-h48" :disabled="proxy_import._wait">
							<span v-if="proxy_import._wait" class="spinner-border spinner-border-sm me-1" role="status"
								aria-hidden="true"></span>
							{{ lang["modal-import-b-save"] }}
						</button>

						<button type="button" class="btn btn-custom-cancel btn-light btn-h48" data-bs-dismiss="modal">{{
							lang["modal-import-b-cancel"] }}</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Modal Add Proxy -->
		<div v-if="page == 'settings'" class="modal fade" id="modal-add-proxy" tabindex="-1" aria-hidden="true"
			data-bs-backdrop="static" data-bs-keyboard="false">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<form class="modal-content custom-form" @submit.prevent="add_new_proxy();">
					<div class="modal-header">
						<div class="modal-title">{{ lang["modal-add-proxy-title"] }}</div>
						<button ref="CloseModalProxyAdd" type="button" class="btn-close shadow-none" data-bs-dismiss="modal"
							aria-label="Close"></button>
					</div>

					<div class="modal-body">
						<div class="row">
							<div class="col-12">
								<label class="form-label">{{ lang["modal-add-proxy-name-label"] }} <span
										class="not-required">{{ lang["modal-add-proxy-name-label-not-require"]
										}}</span></label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									:placeholder="lang['modal-add-proxy-name-ph']" v-model="proxy_add.name">
							</div>
						</div>

						<div class="row mt-3">
							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-color-label"] }}</label>

								<div style="position: relative;">
									<v-swatches v-model="proxy_add.color" shapes="circles"
										:swatch-style="{ width: '34px', height: '34px' }"
										:wrapper-style="{ textAlign: 'center' }" :trigger-style="{ background: 'red' }">
										<input slot="trigger" type="text" :value="proxy_add.color"
											class="form-control form-control-custom-input shadow-none" readonly>
									</v-swatches>
									<div class="_selected_color" :style="{ background: proxy_add.color }"></div>
								</div>
							</div>

							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-type-label"] }}</label>
								<select class="form-select form-select-custom-form" v-model="proxy_add.type">
									<option value="0">HTTP</option>
									<option value="1">Socks5</option>
								</select>
							</div>
						</div>

						<div class="row mt-3">
							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-ip-label"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									placeholder="111.111.111.111" v-model="proxy_add.ip" required>
							</div>

							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-port-label"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									placeholder="1234" v-model="proxy_add.port" required>
							</div>
						</div>

						<div class="row mt-3">
							<div class="col-12">
								<div class="form-check form-switch">
									<input class="form-check-input on-hover shadow-none" type="checkbox" role="switch"
										id="proxy_is_auth" v-model="proxy_add._auth">
									<label class="form-check-label-sw" for="proxy_is_auth">{{
										lang["modal-add-proxy-auth-require-label"] }}</label>
								</div>
							</div>
						</div>

						<div class="row mt-3" v-if="proxy_add._auth">
							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-username-label"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									v-model="proxy_add.user" required>
							</div>

							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-password-label"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									v-model="proxy_add.password" required>
							</div>
						</div>

						<!-- <div class="row mt-3">
							<div class="col-12">
								<div class="form-check form-switch">
									<input class="form-check-input on-hover shadow-none" type="checkbox" role="switch"
										id="proxy_keyboard_template" checked>
									<label class="form-check-label-sw" for="proxy_keyboard_template">Клавиатурная комбинация
										для шаблона</label>
								</div>
							</div>

							<div class="col-12 mt-2">
								<div class="form-check form-switch">
									<input class="form-check-input on-hover shadow-none" type="checkbox" role="switch"
										id="proxy_no_use_local" checked>
									<label class="form-check-label-sw" for="proxy_no_use_local">Не использовать локальный и
										внутренний/частный IP адрес</label>
								</div>
							</div>
						</div> -->
					</div>

					<div class="modal-footer">
						<button type="submit" class="btn btn-custom-blue btn-light btn-h48" :disabled="proxy_add._wait">
							<span v-if="proxy_add._wait" class="spinner-border spinner-border-sm me-1" role="status"
								aria-hidden="true"></span>
							{{ lang["modal-add-proxy-b-save"] }}
						</button>

						<button type="button" class="btn btn-custom-cancel btn-light btn-h48" data-bs-dismiss="modal">{{
							lang["modal-add-proxy-b-cancel"] }}</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Modal Edit Proxy -->
		<div v-if="page == 'settings'" class="modal fade" id="modal-edit-proxy" tabindex="-1" aria-hidden="true"
			data-bs-backdrop="static" data-bs-keyboard="false">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<form class="modal-content custom-form" @submit.prevent="edit_proxy();">
					<div class="modal-header">
						<div class="modal-title">{{ lang["modal-edit-proxy-title"] }}</div>
						<button ref="CloseModalProxyEdit" type="button" class="btn-close shadow-none"
							data-bs-dismiss="modal" aria-label="Close"></button>
					</div>

					<div class="modal-body">
						<div class="row">
							<div class="col-12">
								<label class="form-label">{{ lang["modal-add-proxy-name-label"] }} <span
										class="not-required">{{ lang["modal-add-proxy-name-label-not-require"]
										}}</span></label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									:placeholder="lang['modal-add-proxy-name-ph']" v-model="proxy_edit.name">
							</div>
						</div>

						<div class="row mt-3">
							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-color-label"] }}</label>

								<div style="position: relative;">
									<v-swatches v-model="proxy_edit.color" shapes="circles"
										:swatch-style="{ width: '34px', height: '34px' }"
										:wrapper-style="{ textAlign: 'center' }" :trigger-style="{ background: 'red' }">
										<input slot="trigger" type="text" :value="proxy_edit.color"
											class="form-control form-control-custom-input shadow-none" readonly>
									</v-swatches>
									<div class="_selected_color" :style="{ background: proxy_edit.color }"></div>
								</div>
							</div>

							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-type-label"] }}</label>
								<select class="form-select form-select-custom-form" v-model="proxy_edit.type">
									<option value="0">HTTP</option>
									<option value="1">Socks5</option>
								</select>
							</div>
						</div>

						<div class="row mt-3">
							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-ip-label"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									placeholder="111.111.111.111" v-model="proxy_edit.ip" required>
							</div>

							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-port-label"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									placeholder="1234" v-model="proxy_edit.port" required>
							</div>
						</div>

						<div class="row mt-3">
							<div class="col-12">
								<div class="form-check form-switch">
									<input class="form-check-input on-hover shadow-none" type="checkbox" role="switch"
										id="proxy_is_auth" v-model="proxy_edit._auth">
									<label class="form-check-label-sw" for="proxy_is_auth">{{
										lang["modal-add-proxy-auth-require-label"] }}</label>
								</div>
							</div>
						</div>

						<div class="row mt-3" v-if="proxy_edit._auth">
							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-username-label'"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									v-model="proxy_edit.user" required>
							</div>

							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-proxy-password-label"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									v-model="proxy_edit.password" required>
							</div>
						</div>

						<!-- <div class="row mt-3">
							<div class="col-12">
								<div class="form-check form-switch">
									<input class="form-check-input on-hover shadow-none" type="checkbox" role="switch"
										id="proxy_keyboard_template" checked>
									<label class="form-check-label-sw" for="proxy_keyboard_template">Клавиатурная комбинация
										для шаблона</label>
								</div>
							</div>

							<div class="col-12 mt-2">
								<div class="form-check form-switch">
									<input class="form-check-input on-hover shadow-none" type="checkbox" role="switch"
										id="proxy_no_use_local" checked>
									<label class="form-check-label-sw" for="proxy_no_use_local">Не использовать локальный и
										внутренний/частный IP адрес</label>
								</div>
							</div>
						</div> -->
					</div>

					<div class="modal-footer">
						<button type="submit" class="btn btn-custom-blue btn-light btn-h48" :disabled="proxy_edit._wait">
							<span v-if="proxy_edit._wait" class="spinner-border spinner-border-sm me-1" role="status"
								aria-hidden="true"></span>
							{{ lang["modal-add-proxy-b-save"] }}
						</button>

						<button type="button" class="btn btn-custom-cancel btn-light btn-h48" data-bs-dismiss="modal">{{
							lang["modal-add-proxy-b-cancel"] }}</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Modal Delete Single Proxy -->
		<div v-if="page == 'settings'" class="modal fade" id="modal-delete-single-proxy" tabindex="-1"
			aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
			<div class="modal-dialog modal-dialog-centered modal-sm">
				<form class="modal-content custom-form">
					<div class="modal-header">
						<div class="modal-title fs-5" id="exampleModalLabel">{{ lang["modal-delete-single-proxy-title"] }}
						</div>
						<button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"
							ref="close-modal-delete-single-proxy"></button>
					</div>
					<div class="modal-body modal-body-q text-center">
						<div class="mb-3 icon-mq">
							<Icon icon="ph:seal-question" />
						</div>
						<div class="mq-text">{{ lang["modal-delete-single-proxy-approve"] }} <strong style="display: block;"
								class="mt-2">{{
									single_delete_proxy.ip }}</strong></div>
					</div>
					<div class="modal-footer" style="justify-content: center !important;">
						<button type="button" class="btn btn-custom-blue btn-light btn-h30"
							@click.prevent="deleteProxySingleApprove();" :disabled="single_delete_proxy.wait">
							<span v-if="single_delete_proxy.wait" class="spinner-border spinner-border-sm me-1"
								role="status" aria-hidden="true"></span>
							{{ lang["modal-delete-single-proxy-b-ok"] }}
						</button>

						<button type="button" class="btn btn-custom-cancel btn-light btn-h30" data-bs-dismiss="modal"
							:disabled="single_delete_proxy.wait">{{ lang["modal-delete-single-proxy-b-cancel"] }}</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Modal Delete Multi Proxy -->
		<div v-if="page == 'settings'" class="modal fade" id="modal-delete-multi-proxy" tabindex="-1"
			aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
			<div class="modal-dialog modal-dialog-centered modal-sm">
				<form class="modal-content custom-form">
					<div class="modal-header">
						<div class="modal-title fs-5" id="exampleModalLabel">{{ lang["modal-delete-multi-proxy-title"] }}
						</div>
						<button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"
							ref="close-modal-delete-multi-proxy"></button>
					</div>
					<div class="modal-body modal-body-q text-center">
						<div class="mb-3 icon-mq">
							<Icon icon="ph:seal-question" />
						</div>
						<div class="mq-text">{{ lang["modal-delete-multi-proxy-approve"] }} <span class="text-muted">({{
							multi_delete_proxies.length }} {{ lang["modal-delete-multi-proxy-amt"] }})</span></div>
					</div>
					<div class="modal-footer" style="justify-content: center !important;">
						<button type="button" class="btn btn-custom-blue btn-light btn-h30"
							@click.prevent="deleteProxyMultiApprove();" :disabled="multi_delete_proxy_wait">
							<span v-if="multi_delete_proxy_wait" class="spinner-border spinner-border-sm me-1" role="status"
								aria-hidden="true"></span>
							{{ lang["modal-delete-single-proxy-b-ok"] }}
						</button>

						<button type="button" class="btn btn-custom-cancel btn-light btn-h30" data-bs-dismiss="modal"
							:disabled="multi_delete_proxy_wait">{{ lang["modal-delete-single-proxy-b-cancel"] }}</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Modal Add Proxy LK -->
		<div v-if="page == 'settings'" class="modal fade" id="modal-add-proxy-lk" tabindex="-1" aria-hidden="true"
			data-bs-backdrop="static" data-bs-keyboard="false">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<form class="modal-content custom-form" action="javascript:;">
					<div class="modal-header">
						<div class="modal-title">{{ titleModalAuth }}</div>
						<button ref="CloseModalProxyAddLK" type="button" class="btn-close shadow-none"
							data-bs-dismiss="modal" aria-label="Close" @click.prevent="resetModalImportLK();"></button>
					</div>

					<div class="modal-body">

						<div v-if="!eUser.PS_login">
							<div class="modal-no-auth alert alert-warning">
								{{ lang["modal-add-proxy-lk-no-auth"] }}
							</div>

							<div class="row">
								<div class="col-12">
									<label class="form-label">{{ lang["modal-add-proxy-lk-label-my-code"] }}</label>
									<input type="text" class="form-control form-control-custom-input shadow-none"
										:class="{ 'is-invalid': eAuth.error_code }"
										:placeholder="lang['placehoder-required']" @click.prevent="eAuth.error_code = null"
										v-model="eAuth.code" required>
									<div class="invalid-feedback">
										{{ eAuth.error_code }}
									</div>
								</div>
							</div>
						</div>

						<div v-else>
							<div v-if="!psOrders.loaded">
								<div class="text-center">
									<div class="spinner-border text-primary-custom" role="status"></div>
								</div>
							</div>

							<div v-if="psOrders.loaded">
								<div class="row">
									<div class="col-12" v-if="psOrders.list.length > 0">
										<label class="form-label">{{ lang['modal-add-proxy-lk-select-order-label']
										}}</label>
										<select class="form-select form-select-custom-form shadow-none"
											v-model="psOrders.select_order_id"
											:disabled="psOrders.wait_load_order_id || psOrders.wait_finish_import"
											@change="onChangeSelectOrderId($event)">
											<option value="0" disabled hidden>Выбрать</option>
											<option v-for="(o, i) in psOrders.list" :value="o.id" :key="i">
												#{{ o.id }}. {{ o.service_description }}
											</option>
										</select>
									</div>
									<div v-else class="col-12">
										<div class="alert alert-warning"
											style="margin-bottom: 0;font-size:14px;font-weight:600;">
											{{ lang["modal-add-proxy-lk-empty-orders"] }}
										</div>
									</div>
								</div>
							</div>

							<div v-if="psOrders.load_order_id" class="row mt-3">
								<div class="col-12">
									<form class="ps-import-lk-proxy" v-if="psOrders.data.order.channels">

										<div class="form-check form-check-cube mt-1"
											v-if="psOrders.data.order.channels.length > 1">
											<input type="checkbox" id="import-lk-select-all"
												class="form-check-input shadow-none" v-model="psOrders.selectAll"
												@change="toggleSelectAll" :disabled="psOrders.wait_finish_import">
											<label for="import-lk-select-all"
												class="form-check-label form-check-label-import-lk">
												{{ lang["modal-add-proxy-lk-select-all-label"] }}
												<span class="text-muted">({{ psOrders.data.order.channels.length }})</span>
											</label>
										</div>

										<div class="form-check form-check-cube mt-1"
											v-for="(o, i) in psOrders.data.order.channels" :key="i">
											<input class="form-check-input shadow-none" type="checkbox"
												:id="'order_proxy_mob_' + i" v-model="psOrders.selectedIds"
												:value="`http:${o.http_gateway.ip}:${o.http_gateway.port}:${psOrders.data.order.access.login}:${psOrders.data.order.access.password}:mobile`"
												@change="updateSelectAll" :disabled="psOrders.wait_finish_import">
											<label class="form-check-label form-check-label-import-lk"
												:for="'order_proxy_mob_' + i">
												{{ o.http_gateway.ip }}
											</label>
										</div>
									</form>

									<form class="ps-import-lk-proxy" v-if="psOrders.data.order.proxies">

										<div class="form-check form-check-cube mt-1"
											v-if="psOrders.data.order.proxies.length > 1">
											<input type="checkbox" id="import-lk-select-all"
												class="form-check-input shadow-none" v-model="psOrders.selectAll"
												@change="toggleSelectAll" :disabled="psOrders.wait_finish_import">
											<label for="import-lk-select-all"
												class="form-check-label form-check-label-import-lk">
												{{ lang["modal-add-proxy-lk-select-all-label"] }}
												<span class="text-muted">({{ psOrders.data.order.proxies.length }})</span>
											</label>
										</div>

										<div class="form-check form-check-cube mt-1"
											v-for="(o, i) in psOrders.data.order.proxies" :key="i">
											<input class="form-check-input shadow-none" type="checkbox"
												:id="'order_proxy_' + i" v-model="psOrders.selectedIds"
												:value="`http:${o.ip}:${o.port}:${psOrders.data.order.access.login}:${psOrders.data.order.access.password}:web`"
												@change="updateSelectAll" :disabled="psOrders.wait_finish_import">
											<label class="form-check-label form-check-label-import-lk"
												:for="'order_proxy_' + i">
												{{ o.ip }}
											</label>
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>

					<div class="modal-footer">
						<button type="button" @click.prevent="authPS();" class="btn btn-custom-blue btn-light btn-h48"
							:disabled="eAuth.wait || eAuth.code == '' || eAuth.code.length < 3" v-if="!eUser.PS_login">
							<span v-if="eAuth.wait" class="spinner-border spinner-border-sm me-1" role="status"
								aria-hidden="true"></span>
							{{ lang["modal-add-proxy-lk-b-auth"] }}
						</button>

						<button type="button" @click.prevent="importLKFinish();"
							class="btn btn-custom-blue btn-light btn-h48"
							:disabled="psOrders.wait_finish_import || psOrders.selectedIds.length <= 0"
							v-if="eUser.PS_login && psOrders.list.length > 0 && psOrders.select_order_id > 0">
							<span v-if="psOrders.wait_finish_import" class="spinner-border spinner-border-sm me-1"
								role="status" aria-hidden="true"></span>
							{{ lang["modal-add-proxy-lk-b-add"] }}
						</button>

						<button type="button" class="btn btn-custom-cancel btn-light btn-h48" data-bs-dismiss="modal"
							@click.prevent="resetModalImportLK();" :disabled="psOrders.wait_finish_import">
							{{ lang["modal-add-proxy-lk-b-cancel"] }}
						</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Modal Add Template -->
		<div v-if="page == 'templates'" class="modal fade" id="modal-add-template" tabindex="-1" aria-hidden="true"
			data-bs-backdrop="static" data-bs-keyboard="false">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<form class="modal-content custom-form" @submit.prevent="add_new_template();">
					<div class="modal-header">
						<div class="modal-title">{{ lang["modal-add-template-title"] }}</div>
						<button ref="CloseModalTemplateAdd" type="button" class="btn-close shadow-none"
							data-bs-dismiss="modal" aria-label="Close"></button>
					</div>

					<div class="modal-body">
						<div class="row">
							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-template-name-label"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									:placeholder="lang['modal-add-template-name-ph']" v-model="template_add.name" required>
							</div>

							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-template-template-label"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									:placeholder="lang['modal-add-template-template-ph']" v-model="template_add.template"
									required>
							</div>
						</div>

						<div class="row mt-3">
							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-template-type-label"] }}</label>
								<select class="form-select form-select-custom-form" v-model="template_add.type">
									<option value="0">Wildcard</option>
									<option value="1">Reg Exp</option>
								</select>
							</div>

							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-template-ssl-label"] }}</label>
								<select class="form-select form-select-custom-form" v-model="template_add.ssl_option">
									<option value="0">all</option>
									<option value="1">https</option>
								</select>
							</div>
						</div>
					</div>

					<div class="modal-footer">
						<button type="submit" class="btn btn-custom-blue btn-light btn-h48" :disabled="template_add._wait">
							<span v-if="template_add._wait" class="spinner-border spinner-border-sm me-1" role="status"
								aria-hidden="true"></span>
							{{ lang["modal-add-template-b-save"] }}
						</button>

						<button type="button" class="btn btn-custom-cancel btn-light btn-h48" data-bs-dismiss="modal">{{
							lang["modal-add-template-b-cancel"] }}</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Modal Delete Single Template -->
		<div v-if="page == 'templates'" class="modal fade" id="modal-delete-single-template" tabindex="-1"
			aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
			<div class="modal-dialog modal-dialog-centered modal-sm">
				<form class="modal-content custom-form">
					<div class="modal-header">
						<div class="modal-title fs-5" id="exampleModalLabel">{{ lang["modal-del-s-template-title"] }}</div>
						<button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"
							ref="close-modal-delete-single-template"></button>
					</div>
					<div class="modal-body modal-body-q text-center">
						<div class="mb-3 icon-mq">
							<Icon icon="ph:seal-question" />
						</div>
						<div class="mq-text">{{ lang["modal-del-s-template-approve"] }} <strong style="display: block;"
								class="mt-2">{{
									template_delete.name }}</strong></div>
					</div>
					<div class="modal-footer" style="justify-content: center !important;">
						<button type="button" class="btn btn-custom-blue btn-light btn-h30"
							@click.prevent="deleteTemplateSingleApprove();" :disabled="template_delete._wait">
							<span v-if="template_delete._wait" class="spinner-border spinner-border-sm me-1" role="status"
								aria-hidden="true"></span>
							{{ lang["modal-del-s-template-b-ok"] }}
						</button>

						<button type="button" class="btn btn-custom-cancel btn-light btn-h30" data-bs-dismiss="modal"
							:disabled="template_delete._wait">{{ lang["modal-del-s-template-b-cancel"] }}</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Modal Edit Template -->
		<div v-if="page == 'templates'" class="modal fade" id="modal-edit-template" tabindex="-1" aria-hidden="true"
			data-bs-backdrop="static" data-bs-keyboard="false">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<form class="modal-content custom-form" @submit.prevent="edit_template();">
					<div class="modal-header">
						<div class="modal-title">{{ lang["modal-edit-template-title"] }}</div>
						<button ref="CloseModalTemplateEdit" type="button" class="btn-close shadow-none"
							data-bs-dismiss="modal" aria-label="Close"></button>
					</div>

					<div class="modal-body">
						<div class="row">
							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-template-name-label"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									:placeholder="lang['modal-add-template-name-ph']" v-model="template_edit.name" required>
							</div>

							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-template-template-label"] }}</label>
								<input type="text" class="form-control form-control-custom-input shadow-none"
									:placeholder="lang['modal-add-template-template-ph']" v-model="template_edit.template"
									required>
							</div>
						</div>

						<div class="row mt-3">
							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-template-type-labe"] }}</label>
								<select class="form-select form-select-custom-form" v-model="template_edit.type">
									<option value="0">Wildcard</option>
									<option value="1">Reg Exp</option>
								</select>
							</div>

							<div class="col-6">
								<label class="form-label">{{ lang["modal-add-template-ssl-label"] }}</label>
								<select class="form-select form-select-custom-form" v-model="template_edit.ssl_option">
									<option value="0">all</option>
									<option value="1">https</option>
								</select>
							</div>
						</div>
					</div>

					<div class="modal-footer">
						<button type="submit" class="btn btn-custom-blue btn-light btn-h48" :disabled="template_edit._wait">
							<span v-if="template_edit._wait" class="spinner-border spinner-border-sm me-1" role="status"
								aria-hidden="true"></span>
							{{ lang["modal-add-template-b-save"] }}
						</button>

						<button type="button" class="btn btn-custom-cancel btn-light btn-h48" data-bs-dismiss="modal">{{
							lang["modal-add-template-b-cancel"] }}</button>
					</div>
				</form>
			</div>
		</div>

		<!-- Modal Error -->
		<div class="modal fade" id="modal-error" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
			data-bs-backdrop="static" data-bs-keyboard="false">
			<div class="modal-dialog modal-dialog-centered modal-sm">
				<form class="modal-content custom-form">
					<div class="modal-header">
						<div class="modal-title fs-5" id="exampleModalLabel">{{ lang["modal-error-title"] }}</div>
						<button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"
							ref="close-error-modal-info"></button>
					</div>
					<div class="modal-body modal-body-q text-center">
						<div class="mb-3 icon-mq-error">
							<Icon icon="bxs:error" />
						</div>
						<div class="mq-text">
							<div class="mb-2"><strong>{{ lang["modal-error-error"] }}</strong></div>
							{{ global_modal_error }}
						</div>
					</div>
					<div class="modal-footer" style="justify-content: center !important;">
						<button type="button" class="btn btn-custom-cancel btn-light btn-h30" data-bs-dismiss="modal">{{
							lang["modal-error-close"] }}</button>
					</div>
				</form>
			</div>
		</div>

		<button data-bs-toggle="modal" data-bs-target="#modal-error" ref="open-modal-error"
			style="opacity: 0;position: absolute;display: none;top:-9999;"></button>

		<button data-bs-toggle="modal" data-bs-target="#modal-edit-proxy" ref="open-modal-edit-proxy"
			style="opacity: 0;position: absolute;display: none;top:-9999;"></button>

		<button data-bs-toggle="modal" data-bs-target="#modal-edit-template" ref="open-modal-edit-template"
			style="opacity: 0;position: absolute;display: none;top:-9999;"></button>
	</div>
</template>

<script>
import postman from '@/functions/postman';

import "bootstrap"

import VSwatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.css'

import { Icon } from '@iconify/vue2';

// import eUserGet from '@/functions/eUserGet';

import axios from "axios";

import Lang from '@/functions/languages.js';

const PS_AUTH = 'https://proxy-solutions.net/api/auth';
const PS_ORDERS = 'https://proxy-solutions.net/api/user/orders?lang=ru';
const PS_ORDER_ID = 'https://proxy-solutions.net/api/user/orders/';

const API_SERVER = 'https://ap-pss.net/pss-ext/';

export default {
	components: {
		VSwatches,
		Icon
	},

	name: 'optionsView',
	data: () => ({
		Lang,
		lang: {},

		page: 'settings',
		eUser: {},
		global_modal_error: '',
		synchronization: false,
		useProxyTemplate: 0,

		eAuth: {
			code: '',
			error_code: null,
			wait: false
		},

		psOrders: {
			loaded: false,
			list: [],
			select_order_id: 0,
			wait_load_order_id: false,
			load_order_id: false,
			data: {},
			selectedIds: [],
			selectAll: false,
			wait_finish_import: false
		},

		user: null,
		loaded: false,
		proxy: [],
		proxy_add: {
			color: '#27AF60',
			name: '',
			ip: '',
			port: '',
			user: null,
			password: '',
			type: 0,
			_auth: false,
			_wait: false,
			_user_auth: null
		},
		proxy_edit: {
			color: '',
			name: '',
			ip: '',
			port: '',
			user: null,
			password: '',
			type: 0,
			_auth: false,
			_wait: false,
			_user_auth: null,
			id: 0
		},
		single_delete_proxy: {
			ip: null,
			id: null,
			index: null,
			wait: false
		},
		multi_delete_proxies: [],
		multi_delete_proxies_all: false,
		multi_delete_proxy_wait: false,
		proxyIdConnected: 0,

		proxy_import: {
			proxyIdConnected: 0,
			replace: 0,
			replace_model: false,
			template: 0,
			custom_template: '',
			text: '',
			_user_auth: null,
			_wait: false,
			color: null
		},

		templates_load: false,
		templates: [],
		template_add: {
			name: '',
			template: '',
			type: 0,
			ssl_option: 0,
			_wait: false,
			_user_auth: null
		},
		template_delete: {
			id: 0,
			index: -1,
			name: null,
			_wait: false
		},
		template_edit: {
			id: 0,
			name: '',
			template: '',
			type: 0,
			ssl_option: 0,
			_wait: false,
			_user_auth: null
		},

		logEnabled: false,
		logList: [],

		titleModalAuth: "Добавление прокси из личного кабинета",

		myBrowser: null,
		myBrowserName: null
	}),

	methods: {
		changeLanguage(code) {
			localStorage.setItem('currentLanguage', code);
			location.reload();
		},
		
		exit_PS() {
			chrome.storage.local.set(
				{
					PS_id: null,
					PS_login: null,
					PS_token: null,
					PS_code: null
				}
			);

			this.eUser = {
				PS_id: null,
				PS_login: null,
				PS_token: null,
				PS_code: null
			};
		},

		add_new_template: async function () {
			this.template_add._wait = true;
			this.template_add._user_auth = this.user;

			let data = await postman('template-add.php', this.template_add);
			if (data.templates) {
				this.templates = data.templates;
			}

			this.$refs.CloseModalTemplateAdd.click();

			this.template_add = {
				name: '',
				template: '',
				type: 0,
				ssl_option: 0,
				_wait: false
			}
		},

		edit_proxy: async function () {
			this.proxy_edit._wait = true;

			let data = await postman('edit-proxy.php', this.proxy_edit);
			if (data.list) {
				this.proxy = data.list;
			}

			this.$refs.CloseModalProxyEdit.click();
		},

		openModalEditProxy(id) {
			const index = this.proxy.findIndex(item => item.id === id);
			if (index < 0) return;

			let p = this.proxy[index];

			this.proxy_edit.id = id;
			this.proxy_edit.color = p.color;
			this.proxy_edit.name = p.name;
			this.proxy_edit.ip = p.ip;
			this.proxy_edit.port = p.port;
			this.proxy_edit.user = p.user;
			this.proxy_edit.password = p.password;
			this.proxy_edit.type = p.type;
			if (p.user || p.password) {
				this.proxy_edit._auth = true;
			}
			this.proxy_edit._user_auth = this.user;
			this.proxy_edit._wait = false;

			this.$refs['open-modal-edit-proxy'].click();
		},

		import_proxy: async function () {
			this.proxy_import._wait = true;
			this.proxy_import._user_auth = this.user;
			this.proxy_import.color = this.generateRandomColorCode();

			if (this.proxy_import.replace_model === true) {
				this.proxy_import.replace = 1;
			} else {
				this.proxy_import.replace = 0;
			}

			// const { proxyIdConnected } = await chrome.storage.local.get(
			// 	[
			// 		"proxyIdConnected"
			// 	]
			// );

			let dataGetStorage = await new Promise((resolve) => {
				chrome.storage.local.get(["proxyIdConnected"], (data) => {
					resolve(data);
				});
			});
			this.proxyIdConnected = dataGetStorage.proxyIdConnected;

			// this.proxy_import.proxyIdConnected = proxyIdConnected;

			if (this.proxy_import.template == 3 || this.proxy_import.template == 4 || this.proxy_import.template == 5 || this.proxy_import.template == 6) {
				if (this.proxy_import.template == 3) this.proxy_import.custom_template = 'host:port';
				if (this.proxy_import.template == 4) this.proxy_import.custom_template = 'user:pass@host:port';
				if (this.proxy_import.template == 5) this.proxy_import.custom_template = 'host:port|user:pass';
				if (this.proxy_import.template == 6) this.proxy_import.custom_template = 'host:port@user:pass';
			}

			let data = await postman('import-proxy.php', this.proxy_import);
			if (data.list) {
				this.proxy = data.list;
			}

			if (data.error) {
				this.globalError(data.error);
				return false
			}

			this.$refs.CloseModalImportAdd.click();

			this.proxy_import = {
				proxyIdConnected: 0,
				replace: 0,
				replace_model: false,
				template: 0,
				custom_template: '',
				text: '',
				_user_auth: null,
				_wait: false,
				color: null
			}
		},

		getMyProxy: async function () {
			let data = await postman('my-proxy.php', { user: this.user });

			if (data.error) {
				alert(data.error);
				return;
			}

			if (data === false) {
				let { reserveProxyList } = await chrome.storage.local.get(
					[
						"reserveProxyList"
					]
				);

				if (!reserveProxyList) reserveProxyList = [];
				this.proxy = reserveProxyList;
				this.loaded = true;
				return;
			}

			if (data?.list) {
				this.proxy = data.list;
				this.loaded = true;

				chrome.runtime.sendMessage({
					reserve: "save",
					data: this.proxy
				});
			}

		},

		add_new_proxy: async function () {
			this.proxy_add._wait = true;

			this.proxy_add._user_auth = this.user;

			let data = await postman('add-proxy.php', this.proxy_add);
			if (data.list) {
				this.proxy = data.list;
			}

			this.$refs.CloseModalProxyAdd.click();

			this.proxy_add._wait = false;
			this.proxy_add.color = '#27AF60';
			this.proxy_add.name = '';
			this.proxy_add.ip = '';
			this.proxy_add.port = '';
			this.proxy_add.user = '';
			this.proxy_add.password = '';
			this.proxy_add.type = 0;
			this.proxy_add._auth = false;
		},

		deleteProxyConfirm: function (id) {
			const index = this.proxy.findIndex(item => item.id === id);
			if (index < 0) return;

			this.single_delete_proxy.ip = this.proxy[index].ip;
			this.single_delete_proxy.id = id;
			this.single_delete_proxy.index = index;
		},

		deleteProxySingleApprove: async function () {
			if (!this.single_delete_proxy.id) {
				this.$refs['close-modal-delete-single-proxy'].click();
				return;
			}

			this.single_delete_proxy.wait = true;

			let post = await postman('delete-proxy.php', { _user_auth: this.user, id: this.single_delete_proxy.id });
			if (post.list) {
				this.proxy = post.list;
			}

			this.single_delete_proxy.wait = false;
			this.$refs['close-modal-delete-single-proxy'].click();

			this.single_delete_proxy.ip = null;
			this.single_delete_proxy.id = null;
			this.single_delete_proxy.index = null;
		},

		deleteProxyMultiApprove: async function () {
			if (this.multi_delete_proxies.length <= 0) {
				this.$refs['close-modal-delete-multi-proxy'].click();
				return;
			}

			this.multi_delete_proxy_wait = true;

			let res = await axios.post(
				`${API_SERVER}delete-proxy-multi.php`,
				{
					_user_auth: this.user,
					proxies: this.multi_delete_proxies
				},
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			).catch(error => {
				console.log(error.message);
				this.multi_delete_proxies = [];
				this.multi_delete_proxy_wait = false;
				this.globalError(error.message);
				return;
			});

			if (res.data.list) {
				this.proxy = res.data.list;
			}

			this.$refs['close-modal-delete-multi-proxy'].click();

			this.multi_delete_proxies = [];
			this.multi_delete_proxy_wait = false;
			this.multi_delete_proxies_all = false;
		},

		authPS: async function () {
			this.eAuth.error_code = null;
			this.eAuth.wait = true;

			let psAuth = await axios.post(
				PS_AUTH,
				JSON.stringify({
					"access_code": this.eAuth.code
				}),
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			).catch(error => {
				console.log(error.message);
				this.globalError(error.message);
			});

			psAuth = psAuth.data;

			if (psAuth?.auth_success) {
				this.titleModalAuth = "Добавление прокси из личного кабинета";

				chrome.storage.local.set(
					{
						PS_id: psAuth.user.id,
						PS_login: psAuth.user.login,
						PS_token: psAuth.token,
						PS_code: this.eAuth.code
					}
				);

				this.eUser = {
					PS_id: psAuth.user.id,
					PS_login: psAuth.user.login,
					PS_token: psAuth.token,
					PS_code: this.eAuth.code
				};

				await this.ps_load_my_orders();

			} else {
				this.eAuth.error_code = 'Неверный код доступа!';
			}

			this.eAuth.wait = false;
		},

		ps_load_my_orders: async function () {
			if (!this.eUser.PS_token) return;

			let orders = await axios.get(
				PS_ORDERS,
				{
					headers: {
						'Authorization': `Bearer ${this.eUser.PS_token}`
					}
				}
			).catch(error => {
				console.log(error.message);
				this.globalError(error.message);
			});

			orders = orders.data.orders;

			this.psOrders.list = orders.filter(item => item.status === 'active');
			this.psOrders.loaded = true;
		},

		onChangeSelectOrderId: async function () {
			this.psOrders.selectAll = false;
			this.psOrders.selectedIds = [];
			this.psOrders.wait_load_order_id = true;

			let order = await axios.get(
				`${PS_ORDER_ID}${this.psOrders.select_order_id}?lang=ru`,
				{
					headers: {
						'Authorization': `Bearer ${this.eUser.PS_token}`
					}
				}
			).catch(error => {
				console.log(error.message);
				this.globalError(error.message);
				this.resetModalImportLK();
				return;
			});

			this.psOrders.wait_load_order_id = false;
			this.psOrders.load_order_id = true;
			this.psOrders.data = order.data;
		},

		importLKFinish: async function () {
			if (this.psOrders.selectedIds.length <= 0) return;

			this.psOrders.wait_finish_import = true;

			let res = await axios.post(
				`${API_SERVER}import-lk-proxy.php`,
				{
					_user_auth: this.user,
					proxies: this.psOrders.selectedIds,
					color: this.generateRandomColorCode(),
					_api_id_order: this.psOrders.data.order.id
				},
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			).catch(error => {
				console.log(error.message);
				this.globalError(error.message);
				this.resetModalImportLK();
				return;
			});

			if (res.data.list) {
				this.proxy = res.data.list;
			}

			this.$refs['CloseModalProxyAddLK'].click();
			this.resetModalImportLK();
		},

		toggleSelectAllProxyDeleted() {
			if (this.multi_delete_proxies_all) {
				/*this.multi_delete_proxies = this.proxy.map(
					(o) => o.id
				);*/
				this.multi_delete_proxies = this.proxy
					.filter(p => !this.isProxyDisabled(p))
					.map(o => o.id);
			} else {
				this.multi_delete_proxies = [];
			}
		},

		isProxyDisabled(proxy) {
			return this.proxyIdConnected === proxy.id;
		},

		updateSelectAllProxyDeleted() {
			if (this.multi_delete_proxies.some(o => !this.proxy.includes(o.id))) {
				this.multi_delete_proxies_all = false;
			}
		},

		toggleSelectAll() {
			if (this.psOrders.selectAll) {
				if (this.psOrders.data.order.channels) {
					this.psOrders.selectedIds = this.psOrders.data.order.channels.map(
						(o) => `http:${o.http_gateway.ip}:${o.http_gateway.port}:${this.psOrders.data.order.access.login}:${this.psOrders.data.order.access.password}:mobile`
					);
				} else {
					this.psOrders.selectedIds = this.psOrders.data.order.proxies.map(
						(o) => `http:${o.ip}:${o.port}:${this.psOrders.data.order.access.login}:${this.psOrders.data.order.access.password}:web`
					);
				}
			} else {
				this.psOrders.selectedIds = [];
			}
		},

		updateSelectAll() {
			if (this.psOrders.data.order.channels) {
				if (this.psOrders.data.order.channels.some(o => !this.psOrders.selectedIds.includes(`http:${o.http_gateway.ip}:${o.http_gateway.port}:${this.psOrders.data.order.access.login}:${this.psOrders.data.order.access.password}:mobile`))) {
					this.psOrders.selectAll = false;
				}
			} else {
				if (this.psOrders.data.order.proxies.some(o => !this.psOrders.selectedIds.includes(`http:${o.ip}:${o.port}:${this.psOrders.data.order.access.login}:${this.psOrders.data.order.access.password}:web`))) {
					this.psOrders.selectAll = false;
				}
			}
		},

		resetModalImportLK: function () {
			this.psOrders = {
				loaded: false,
				list: [],
				select_order_id: 0,
				wait_load_order_id: false,
				load_order_id: false,
				data: {},
				selectedIds: [],
				selectAll: false,
				wait_finish_import: false
			}
		},

		globalError(text) {
			this.global_modal_error = text;
			this.$refs['open-modal-error'].click();
		},

		generateRandomColorCode() {
			const red = Math.floor(Math.random() * 256);
			const green = Math.floor(Math.random() * 256);
			const blue = Math.floor(Math.random() * 256);

			const redHex = red.toString(16).padStart(2, '0');
			const greenHex = green.toString(16).padStart(2, '0');
			const blueHex = blue.toString(16).padStart(2, '0');

			const colorCode = `#${redHex}${greenHex}${blueHex}`;

			return colorCode;
		},

		proxySwitch: async function (id, event) {
			const index = this.proxy.findIndex(item => item.id === id);
			const p = this.proxy[index];

			const isChecked = event.target.checked;

			if (!isChecked) {
				await this.proxyDisconnect(true);
			} else {
				this.proxyIdConnected = p.id;

				let fd_index = this.multi_delete_proxies.indexOf(p.id);
				if (fd_index !== -1) {
					this.multi_delete_proxies.splice(fd_index, 1);
				}

				chrome.runtime.sendMessage({
					cmd: "ext-show-push",
					title: `ProxySolutions`,
					text: `Подключание к ${p.ip}`
				});

				console.log('tet')

				chrome.runtime.sendMessage({
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
				});
			}
		},

		proxyDisconnect: async function (notif = false) {
			const { proxyIdConnected } = await chrome.storage.local.get("proxyIdConnected");

			if (proxyIdConnected) {
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
			}

			this.proxyIdConnected = 0;
		},

		synchronizationSwitch() {
			chrome.storage.local.set(
				{
					synchronization: this.synchronization,
				}
			);
		},

		// TEMPLATES //

		getMyTemplates: async function () {
			let data = await postman('my-templates.php', { user: this.user });

			if (data === false) {
				return;
			}

			if (data.error) {
				alert(data.error);
				return;
			}

			this.templates = data.templates;
			this.templates_load = true;
		},

		useProxyTemplateChange() {
			if (this.useProxyTemplate == -1) {
				this.useProxyTemplate = 0;
			}

			chrome.storage.local.set(
				{
					useProxyTemplate: this.useProxyTemplate,
				}
			);
		},

		templateTypeGet(value) {
			let value_name = 'unknown';

			if (value == 0) value_name = 'Wildcard';
			if (value == 1) value_name = 'Reg Exp';

			return value_name;
		},

		templateSslOptGet(value) {
			let value_name = 'unknown';

			if (value == 0) value_name = 'all';
			if (value == 1) value_name = 'https';

			return value_name;
		},

		templateSwitch: async function (id, event) {
			//const index = this.templates.findIndex(item => item.id === id);

			const isChecked = event.target.checked;
			let newValue = (isChecked === true) ? 1 : 0;

			let data = await postman('status-template.php',
				{
					_user_auth: this.user,
					id: id,
					status: newValue
				}
			);

			if (data.templates) this.templates = data.templates;
		},

		deleteTemplateConfirm: function (id) {
			const index = this.templates.findIndex(item => item.id === id);
			if (index < 0) return;

			this.template_delete.id = id;
			this.template_delete.name = this.templates[index].name;
			this.template_delete.index = index;
		},

		deleteTemplateSingleApprove: async function () {
			if (!this.template_delete.id) {
				this.$refs['close-modal-delete-single-template'].click();
				return;
			}

			this.template_delete._wait = true;

			let post = await postman('delete-template.php', { _user_auth: this.user, id: this.template_delete.id });
			if (post.templates) {
				this.templates = post.templates;
			}

			this.template_delete._wait = false;
			this.$refs['close-modal-delete-single-template'].click();

			this.template_delete.id = null;
			this.template_delete.index = null;
			this.template_delete.name = null;
		},

		openModalEditTemplate(id) {
			const index = this.templates.findIndex(item => item.id === id);
			if (index < 0) return;

			let t = this.templates[index];

			this.template_edit.id = id;
			this.template_edit.name = t.name;
			this.template_edit.template = t.template;
			this.template_edit.type = t.type;
			this.template_edit.ssl_option = t.ssl_option;
			this.template_edit._user_auth = this.user;
			this.template_edit._wait = false;

			this.$refs['open-modal-edit-template'].click();
		},

		edit_template: async function () {
			this.proxy_edit._wait = true;

			let data = await postman('edit-template.php', this.template_edit);
			if (data.templates) {
				this.templates = data.templates;
			}

			this.$refs.CloseModalTemplateEdit.click();
		},


		// LOG //

		logSwitch() {
			chrome.storage.local.set(
				{
					logEnabled: this.logEnabled,
				}
			);
		},

		getMyLog: async function () {
			let data = await postman('my-log.php', { user: this.user });

			if (data.error) {
				return;
			}

			this.logList = data.list;
		},
	},

	watch: {
		proxy: async function () {
			// const { proxyIdConnected } = await chrome.storage.local.get("proxyIdConnected");
			// this.proxyIdConnected = proxyIdConnected;

			let data = await new Promise((resolve) => {
				chrome.storage.local.get(["proxyIdConnected"], (data) => {
					resolve(data);
				});
			});
			this.proxyIdConnected = data.proxyIdConnected;
		}
	},

	mounted: async function () {
		this.lang = Lang();
		this.titleModalAuth = this.lang["modal-add-proxy-lk-title-auth-1"];

		if (process.env.VUE_APP_BROWSER === 'firefox') {
			this.myBrowser = browser;
			this.myBrowserName = 'firefox';
		} else if (process.env.VUE_APP_BROWSER === 'chrome') {
			this.myBrowser = chrome;
			this.myBrowserName = 'chrome';
		}


		try {
			let storageData = await new Promise((resolve) => {
				chrome.storage.local.get(null, (data) => {
					resolve(data);
				});
			});

			this.user = storageData.userId;

			if (storageData.openModalAuth && storageData.openModalAuth == 1) {
				this.titleModalAuth = this.lang["modal-add-proxy-lk-title-auth-2"];
				chrome.storage.local.set({ openModalAuth: 0 });
				this.$refs['link-for-open-modal-auth'].click();
			}

			this.proxyIdConnected = storageData.proxyIdConnected;
			this.synchronization = storageData.synchronization;
			this.useProxyTemplate = storageData.useProxyTemplate;
			this.logEnabled = storageData.logEnabled;

			this.getMyProxy();
			this.getMyTemplates();
			this.getMyLog();
			setInterval(() => this.getMyLog(), 5000);

			this.eUser = {
				PS_id: storageData.PS_id,
				PS_login: storageData.PS_login,
				PS_token: storageData.PS_token,
				PS_code: storageData.PS_code
			}

			// Ваш код, использующий storageData
		} catch (error) {
			console.error("Ошибка при получении данных из хранилища:", error);
		}


		// const { userId, proxyIdConnected, synchronization, useProxyTemplate, logEnabled, openModalAuth } = await this.myBrowser.storage.local.get(
		// 	[
		// 		"userId",
		// 		"proxyIdConnected",
		// 		"synchronization",
		// 		"useProxyTemplate",
		// 		"logEnabled",
		// 		"openModalAuth"
		// 	]
		// );
		// this.user = userId;

		// if (openModalAuth && openModalAuth == 1) {
		// 	this.titleModalAuth = "Вход для клиентов ProxySolutions";
		// 	chrome.storage.local.set({ openModalAuth: 0 });
		// 	this.$refs['link-for-open-modal-auth'].click();
		// }

		// this.proxyIdConnected = proxyIdConnected;
		// this.synchronization = synchronization;
		// this.useProxyTemplate = useProxyTemplate;
		// this.logEnabled = logEnabled;

		// this.getMyProxy();
		// this.getMyTemplates();
		// this.getMyLog();
		// setInterval(() => this.getMyLog(), 5000);

		// this.eUser = await eUserGet();
	}
}
</script>

<style>@import '@/assets/bootstrap.min.css';
@import '@/assets/font.css';
@import '@/assets/dashboard.css';
@import '@/assets/cooltipz.css';</style>