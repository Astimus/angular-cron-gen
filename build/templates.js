angular.module('angular-cron-gen').run(['$templateCache', function($templateCache) {$templateCache.put('angular-cron-gen/cron-gen-time-select.html','<div class="inline-block">\r\n    <select class="hours"\r\n            name="{{namePrefix}}Hours"\r\n            ng-disabled="$ctrl.isDisabled"\r\n            ng-change="$ctrl.onChange()"\r\n            ng-required="$ctrl.isRequired"\r\n            ng-model="$ctrl.model.hours"\r\n            ng-options="hour as $ctrl.cronGenService.padNumber(hour) for hour in $ctrl.selectOptions.hours"\r\n            ng-class="$ctrl.selectClass">\r\n    </select>\r\n    <select class="minutes"\r\n            name="{{namePrefix}}Minutes"\r\n            ng-disabled="$ctrl.isDisabled"\r\n            ng-change="$ctrl.onChange()"\r\n            ng-required="$ctrl.isRequired"\r\n            ng-model="$ctrl.model.minutes"\r\n            ng-options="minute as $ctrl.cronGenService.padNumber(minute) for minute in $ctrl.selectOptions.minutes"\r\n            ng-class="$ctrl.selectClass">\r\n    </select>\r\n    <select class="seconds"\r\n            name="{{namePrefix}}Seconds"\r\n            ng-show="!$ctrl.hideSeconds"\r\n            ng-disabled="$ctrl.isDisabled"\r\n            ng-change="$ctrl.onChange()"\r\n            ng-required="$ctrl.isRequired"\r\n            ng-model="$ctrl.model.seconds"\r\n            ng-options="second as $ctrl.cronGenService.padNumber(second) for second in $ctrl.selectOptions.seconds"\r\n            ng-class="$ctrl.selectClass">\r\n    </select>\r\n    <select class="hour-types"\r\n            name="{{namePrefix}}HourType"\r\n            ng-show="!$ctrl.use24HourTime"\r\n            ng-disabled="$ctrl.isDisabled"\r\n            ng-change="$ctrl.onChange()"\r\n            ng-model="$ctrl.model.hourType"\r\n            ng-options="hourType as hourType for hourType in $ctrl.selectOptions.hourTypes"\r\n            ng-required="$ctrl.isRequired"\r\n            ng-class="$ctrl.selectClass">\r\n    </select>\r\n</div>');
$templateCache.put('angular-cron-gen/cron-gen.html','<!doctype html>\r\n<div class="cron-gen-main" ng-cloak>\r\n    <ul class="nav nav-tabs tab-nav" role="tablist">\r\n        <li ng-class="{\'active\': $ctrl.activeTab === \'minutes\', \'disabled\': $ctrl.ngDisabled}"\r\n            ng-show="!$ctrl.parsedOptions.hideMinutesTab"\r\n            role="presentation">\r\n            <a href="#"\r\n               aria-controls="minutes"\r\n               role="tab"\r\n               ng-click="$ctrl.setActiveTab($event, \'minutes\')">\r\n                \u041C\u0438\u043D\u0443\u0442\u044B\r\n            </a>\r\n        </li>\r\n        <li role="presentation"\r\n            ng-show="!$ctrl.parsedOptions.hideHourlyTab"\r\n            ng-class="{\'active\': $ctrl.activeTab === \'hourly\', \'disabled\': $ctrl.ngDisabled}">\r\n            <a href="#"\r\n               aria-controls="hourly"\r\n               role="tab"\r\n               ng-click="$ctrl.setActiveTab($event, \'hourly\')">\r\n                \u0427\u0430\u0441\u044B\r\n            </a>\r\n        </li>\r\n        <li role="presentation"\r\n            ng-show="!$ctrl.parsedOptions.hideDailyTab"\r\n            ng-class="{\'active\': $ctrl.activeTab === \'daily\', \'disabled\': $ctrl.ngDisabled}">\r\n            <a href="#"\r\n               aria-controls="daily"\r\n               role="tab"\r\n               ng-click="$ctrl.setActiveTab($event, \'daily\')">\r\n                \u0414\u043D\u0438\r\n            </a>\r\n        </li>\r\n        <li role="presentation"\r\n            ng-show="!$ctrl.parsedOptions.hideWeeklyTab"\r\n            ng-class="{\'active\': $ctrl.activeTab === \'weekly\', \'disabled\': $ctrl.ngDisabled}">\r\n            <a href="#" aria-controls="weekly"\r\n               role="tab"\r\n               ng-click="$ctrl.setActiveTab($event, \'weekly\')">\r\n                \u041D\u0435\u0434\u0435\u043B\u0438\r\n            </a>\r\n        </li>\r\n        <li role="presentation"\r\n            ng-show="!$ctrl.parsedOptions.hideMonthlyTab"\r\n            ng-class="{\'active\': $ctrl.activeTab === \'monthly\', \'disabled\': $ctrl.ngDisabled}">\r\n            <a href="#"\r\n               aria-controls="monthly"\r\n               role="tab"\r\n               ng-click="$ctrl.setActiveTab($event, \'monthly\')">\r\n                \u041C\u0435\u0441\u044F\u0446\u044B\r\n            </a>\r\n        </li>\r\n        <li role="presentation"\r\n            ng-show="!$ctrl.parsedOptions.hideYearlyTab"\r\n            ng-class="{\'active\': $ctrl.activeTab === \'yearly\', \'disabled\': $ctrl.ngDisabled}">\r\n            <a href="#"\r\n               aria-controls="yearly"\r\n               role="tab"\r\n               ng-click="$ctrl.setActiveTab($event, \'yearly\')">\r\n                \u0413\u043E\u0434\u044B\r\n            </a>\r\n        </li>\r\n        <li role="presentation"\r\n            ng-show="!$ctrl.parsedOptions.hideAdvancedTab"\r\n            ng-class="{\'active\': $ctrl.activeTab === \'advanced\', \'disabled\': $ctrl.ngDisabled}">\r\n            <a href="#"\r\n               aria-controls="advanced"\r\n               role="tab"\r\n               ng-click="$ctrl.setActiveTab($event, \'advanced\')">\r\n                \u0412\u0440\u0443\u0447\u043D\u0443\u044E\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    <div class="cron-gen-container">\r\n        <div class="row">\r\n            <div class="col-xs-12">\r\n                <div class="tab-content">\r\n                    <div class="tab-pane"\r\n                         ng-show="!$ctrl.parsedOptions.hideMinutesTab"\r\n                         ng-class="{\'active\': $ctrl.activeTab === \'minutes\'}">\r\n                        <div class="well well-small">\r\n                            \u041A\u0430\u0436\u0434\u0443\u044E(\u044B\u0435)\r\n                            <select class="minutes"\r\n                                    name="minutesMinutes"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'minutes\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.minutes.minutes"\r\n                                    ng-required="$ctrl.activeTab === \'minutes\'"\r\n                                    ng-options="minute as minute for minute in $ctrl.selectOptions.minutes"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            \u043C\u0438\u043D\u0443\u0442\u0443(\u044B) \u0432\r\n                            <select class="seconds"\r\n                                    name="minutesSeconds"\r\n                                    ng-show="!$ctrl.parsedOptions.hideSeconds"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'minutes\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.minutes.seconds"\r\n                                    ng-required="$ctrl.activeTab === \'minutes\'"\r\n                                    ng-options="second as $ctrl.cronGenService.padNumber(second) for second in $ctrl.selectOptions.seconds"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            <span ng-show="!$ctrl.parsedOptions.hideSeconds">c\u0435\u043A\u0443\u043D\u0434\u0443</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class="tab-pane"\r\n                         ng-show="!$ctrl.parsedOptions.hideHourlyTab"\r\n                         ng-class="{\'active\': $ctrl.activeTab === \'hourly\'}">\r\n                        <div class="well well-small">\r\n                            \u041A\u0430\u0436\u0434\u044B\u0439(\u044B\u0435)\r\n                            <select class="hours"\r\n                                    name="hourlyHours"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'hourly\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.hourly.hours"\r\n                                    ng-required="$ctrl.activeTab === \'hourly\'"\r\n                                    ng-options="hour as hour for hour in $ctrl.selectOptions.hours"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            \u0447\u0430\u0441(\u044B) \u0432\r\n                            <select class="minutes"\r\n                                    name="hourlyMinutes"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'hourly\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.hourly.minutes"\r\n                                    ng-required="$ctrl.activeTab === \'hourly\'"\r\n                                    ng-options="minute as $ctrl.cronGenService.padNumber(minute) for minute in $ctrl.selectOptions.fullMinutes"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            \u043C\u0438\u043D\u0443\u0442\r\n                            <select class="seconds"\r\n                                    name="hourlySeconds"\r\n                                    ng-show="!$ctrl.parsedOptions.hideSeconds"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'hourly\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.hourly.seconds"\r\n                                    ng-required="$ctrl.activeTab === \'hourly\'"\r\n                                    ng-options="second as $ctrl.cronGenService.padNumber(second) for second in $ctrl.selectOptions.seconds"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            <span ng-show="!$ctrl.parsedOptions.hideSeconds">\u0441\u0435\u043A\u0443\u043D\u0434</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class="tab-pane"\r\n                         ng-show="!$ctrl.parsedOptions.hideDailyTab"\r\n                         ng-class="{\'active\': $ctrl.activeTab === \'daily\'}">\r\n                        <div class="well well-small">\r\n                            <input type="radio"\r\n                                   value="everyDays"\r\n                                   name="daily-radio"\r\n                                   ng-disabled="$ctrl.ngDisabled"\r\n                                   ng-change="$ctrl.regenerateCron()"\r\n                                   ng-model="$ctrl.state.daily.subTab"\r\n                                   ng-class="$ctrl.state.formRadioClass"\r\n                                   checked="checked">\r\n                            Every\r\n                            <select class="days"\r\n                                    name="dailyEveryDaysDays"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'daily\' || $ctrl.state.daily.subTab !== \'everyDays\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.daily.everyDays.days"\r\n                                    ng-required="$ctrl.activeTab === \'daily\' && $ctrl.state.daily.subTab === \'everyDays\'"\r\n                                    ng-options="monthDay as monthDay for monthDay in $ctrl.selectOptions.monthDays"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            day(s) at\r\n                            <cron-gen-time-select\r\n                                    is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'daily\' || $ctrl.state.daily.subTab !== \'everyDays\'"\r\n                                    on-change="$ctrl.regenerateCron()"\r\n                                    name-prefix="dailyEveryDays"\r\n                                    is-required="$ctrl.activeTab === \'daily\' && $ctrl.state.daily.subTab === \'everyDays\'"\r\n                                    model="$ctrl.state.daily.everyDays"\r\n                                    select-class="$ctrl.parsedOptions.formSelectClass"\r\n                                    use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n                                    hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n                            </cron-gen-time-select>\r\n                        </div>\r\n                        <div class="well well-small">\r\n                            <input type="radio"\r\n                                   value="everyWeekDay"\r\n                                   ng-disabled="$ctrl.ngDisabled"\r\n                                   ng-change="$ctrl.regenerateCron()"\r\n                                   ng-model="$ctrl.state.daily.subTab"\r\n                                   ng-class="$ctrl.state.formRadioClass"\r\n                                   name="daily-radio">\r\n                            Every week day (Monday through Friday) at\r\n                            <cron-gen-time-select\r\n                                    is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'daily\' || $ctrl.state.daily.subTab !== \'everyWeekDay\'"\r\n                                    on-change="$ctrl.regenerateCron()"\r\n                                    name-prefix="dailyEveryWeekDay"\r\n                                    is-required="$ctrl.activeTab === \'daily\' && $ctrl.state.daily.subTab === \'everyWeekDay\'"\r\n                                    model="$ctrl.state.daily.everyWeekDay"\r\n                                    select-class="$ctrl.parsedOptions.formSelectClass"\r\n                                    use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n                                    hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n                            </cron-gen-time-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class="tab-pane"\r\n                         ng-show="!$ctrl.parsedOptions.hideWeeklyTab"\r\n                         ng-class="{\'active\': $ctrl.activeTab === \'weekly\'}">\r\n                        <div class="well well-small row">\r\n                            <div class="col-sm-6">\r\n                                <input type="checkbox"\r\n                                       name="weeklyMON"\r\n                                       ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n                                       ng-change="$ctrl.regenerateCron()"\r\n                                       ng-model="$ctrl.state.weekly.MON"\r\n                                       ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n                                Monday\r\n                            </div>\r\n                            <div class="col-sm-6">\r\n                                <input type="checkbox"\r\n                                       name="weeklyTUE"\r\n                                       ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n                                       ng-change="$ctrl.regenerateCron()"\r\n                                       ng-model="$ctrl.state.weekly.TUE"\r\n                                       ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n                                Tuesday\r\n                            </div>\r\n                            <div class="col-sm-6">\r\n                                <input type="checkbox"\r\n                                       name="weeklyWED"\r\n                                       ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n                                       ng-change="$ctrl.regenerateCron()"\r\n                                       ng-model="$ctrl.state.weekly.WED"\r\n                                       ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n                                Wednesday\r\n                            </div>\r\n                            <div class="col-sm-6">\r\n                                <input type="checkbox"\r\n                                       name="weeklyTHU"\r\n                                       ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n                                       ng-change="$ctrl.regenerateCron()"\r\n                                       ng-model="$ctrl.state.weekly.THU"\r\n                                       ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n                                Thursday\r\n                            </div>\r\n                            <div class="col-sm-6">\r\n                                <input type="checkbox"\r\n                                       name="weeklyFRI"\r\n                                       ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n                                       ng-change="$ctrl.regenerateCron()"\r\n                                       ng-model="$ctrl.state.weekly.FRI"\r\n                                       ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n                                Friday\r\n                            </div>\r\n                            <div class="col-sm-6">\r\n                                <input type="checkbox"\r\n                                       name="weeklySAT"\r\n                                       ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n                                       ng-change="$ctrl.regenerateCron()"\r\n                                       ng-model="$ctrl.state.weekly.SAT"\r\n                                       ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n                                Saturday\r\n                            </div>\r\n                            <div class="col-sm-6">\r\n                                <input type="checkbox"\r\n                                       name="weeklySUN"\r\n                                       ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n                                       ng-change="$ctrl.regenerateCron()"\r\n                                       ng-model="$ctrl.state.weekly.SUN"\r\n                                       ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n                                Sunday\r\n                            </div>\r\n                        </div>\r\n                        Start time\r\n                        <cron-gen-time-select\r\n                                is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n                                on-change="$ctrl.regenerateCron()"\r\n                                name-prefix="weekly"\r\n                                is-required="$ctrl.activeTab === \'weekly\'"\r\n                                model="$ctrl.state.weekly"\r\n                                select-class="$ctrl.parsedOptions.formSelectClass"\r\n                                use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n                                hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n                        </cron-gen-time-select>\r\n                    </div>\r\n                    <div class="tab-pane"\r\n                         ng-show="!$ctrl.parsedOptions.hideMonthlyTab"\r\n                         ng-class="{\'active\': $ctrl.activeTab === \'monthly\'}">\r\n                        <div class="well well-small">\r\n                            <input type="radio"\r\n                                   value="specificDay"\r\n                                   ng-disabled="$ctrl.ngDisabled"\r\n                                   ng-change="$ctrl.regenerateCron()"\r\n                                   ng-model="$ctrl.state.monthly.subTab"\r\n                                   ng-class="$ctrl.state.formRadioClass"\r\n                                   name="monthly-radio"\r\n                                   checked="checked">\r\n                            On the\r\n                            <select class="month-days"\r\n                                    name="monthlySpecificDayDay"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'monthly\' || $ctrl.state.monthly.subTab !== \'specificDay\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.monthly.specificDay.day"\r\n                                    ng-required="$ctrl.activeTab === \'monthly\' && $ctrl.state.monthly.subTab === \'specificDay\'"\r\n                                    ng-options="monthDaysWithLast as $ctrl.monthDayDisplay(monthDaysWithLast) for monthDaysWithLast in $ctrl.selectOptions.monthDaysWithLasts"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            of every\r\n                            <select class="months-small"\r\n                                    name="monthlySpecificDayMonths"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'monthly\' || $ctrl.state.monthly.subTab !== \'specificDay\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.monthly.specificDay.months"\r\n                                    ng-required="$ctrl.activeTab === \'monthly\' && $ctrl.state.monthly.subTab === \'specificDay\'"\r\n                                    ng-options="month as month for month in $ctrl.selectOptions.months"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            month(s) at\r\n                            <cron-gen-time-select\r\n                                    is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'monthly\' || $ctrl.state.monthly.subTab !== \'specificDay\'"\r\n                                    on-change="$ctrl.regenerateCron()"\r\n                                    name-prefix="monthlySpecificDay"\r\n                                    is-required="$ctrl.activeTab === \'monthly\' && $ctrl.state.monthly.subTab === \'specificDay\'"\r\n                                    model="$ctrl.state.monthly.specificDay"\r\n                                    select-class="$ctrl.parsedOptions.formSelectClass"\r\n                                    use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n                                    hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n                            </cron-gen-time-select>\r\n                        </div>\r\n                        <div class="well well-small">\r\n                            <input type="radio"\r\n                                   value="specificWeekDay"\r\n                                   ng-disabled="$ctrl.ngDisabled"\r\n                                   ng-change="$ctrl.regenerateCron()"\r\n                                   ng-model="$ctrl.state.monthly.subTab"\r\n                                   ng-class="$ctrl.state.formRadioClass"\r\n                                   name="monthly-radio">\r\n                            On the\r\n                            <select class="day-order-in-month"\r\n                                    name="monthlySpecificWeekDayMonthWeek"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'monthly\' || $ctrl.state.monthly.subTab !== \'specificWeekDay\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.monthly.specificWeekDay.monthWeek"\r\n                                    ng-required="$ctrl.activeTab === \'monthly\' && $ctrl.state.monthly.subTab === \'specificWeekDay\'"\r\n                                    ng-options="monthWeek as $ctrl.monthWeekDisplay(monthWeek) for monthWeek in $ctrl.selectOptions.monthWeeks"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            <select class="week-days"\r\n                                    name="monthlySpecificWeekDayDay"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'monthly\' || $ctrl.state.monthly.subTab !== \'specificWeekDay\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.monthly.specificWeekDay.day"\r\n                                    ng-required="$ctrl.activeTab === \'monthly\' && $ctrl.state.monthly.subTab === \'specificWeekDay\'"\r\n                                    ng-options="day as $ctrl.dayDisplay(day) for day in $ctrl.selectOptions.days"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            of every\r\n                            <select class="months-small"\r\n                                    name="monthlySpecificWeekDayMonths"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'monthly\' || $ctrl.state.monthly.subTab !== \'specificWeekDay\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.monthly.specificWeekDay.months"\r\n                                    ng-required="$ctrl.activeTab === \'monthly\' && $ctrl.state.monthly.subTab === \'specificWeekDay\'"\r\n                                    ng-options="month as month for month in $ctrl.selectOptions.months"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            month(s) at\r\n                            <cron-gen-time-select\r\n                                    is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'monthly\' || $ctrl.state.monthly.subTab !== \'specificWeekDay\'"\r\n                                    on-change="$ctrl.regenerateCron()"\r\n                                    name-prefix="monthlySpecificWeekDay"\r\n                                    is-required="$ctrl.activeTab === \'monthly\' && $ctrl.state.monthly.subTab === \'specificWeekDay\'"\r\n                                    model="$ctrl.state.monthly.specificWeekDay"\r\n                                    select-class="$ctrl.parsedOptions.formSelectClass"\r\n                                    use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n                                    hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n                            </cron-gen-time-select>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class="tab-pane"\r\n                         ng-show="!$ctrl.parsedOptions.hideYearlyTab"\r\n                         ng-class="{\'active\': $ctrl.activeTab === \'yearly\'}">\r\n                        <div class="well well-small">\r\n                            <input type="radio"\r\n                                   value="specificMonthDay"\r\n                                   ng-disabled="$ctrl.ngDisabled"\r\n                                   ng-change="$ctrl.regenerateCron()"\r\n                                   ng-model="$ctrl.state.yearly.subTab"\r\n                                   ng-class="$ctrl.state.formRadioClass"\r\n                                   name="yearly-radio">\r\n                            Every\r\n                            <select class="months"\r\n                                    name="yearlySpecificMonthDayMonth"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthDay\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.yearly.specificMonthDay.month"\r\n                                    ng-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthDay\'"\r\n                                    ng-options="month as $ctrl.monthDisplay(month) for month in $ctrl.selectOptions.months"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            on the\r\n                            <select class="month-days"\r\n                                    name="yearlySpecificMonthDayDay"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthDay\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.yearly.specificMonthDay.day"\r\n                                    ng-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthDay\'"\r\n                                    ng-options="monthDaysWithLast as $ctrl.monthDayDisplay(monthDaysWithLast) for monthDaysWithLast in $ctrl.selectOptions.monthDaysWithLasts"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            at\r\n                            <cron-gen-time-select\r\n                                    is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthDay\'"\r\n                                    on-change="$ctrl.regenerateCron()"\r\n                                    is-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthDay\'"\r\n                                    name-prefix="yearlySpecificMonthDay"\r\n                                    model="$ctrl.state.yearly.specificMonthDay"\r\n                                    select-class="$ctrl.parsedOptions.formSelectClass"\r\n                                    use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n                                    hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n                            </cron-gen-time-select>\r\n                        </div>\r\n                        <div class="well well-small">\r\n                            <input type="radio"\r\n                                   value="specificMonthWeek"\r\n                                   ng-disabled="$ctrl.ngDisabled"\r\n                                   ng-change="$ctrl.regenerateCron()"\r\n                                   ng-model="$ctrl.state.yearly.subTab"\r\n                                   ng-class="$ctrl.state.formRadioClass"\r\n                                   name="yearly-radio">\r\n                            On the\r\n                            <select class="day-order-in-month"\r\n                                    name="yearlySpecificMonthWeekMonthWeek"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthWeek\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.yearly.specificMonthWeek.monthWeek"\r\n                                    ng-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthWeek\'"\r\n                                    ng-options="monthWeek as $ctrl.monthWeekDisplay(monthWeek) for monthWeek in $ctrl.selectOptions.monthWeeks"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            <select class="week-days"\r\n                                    name="yearlySpecificMonthWeekMonthDay"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthWeek\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.yearly.specificMonthWeek.day"\r\n                                    ng-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthWeek\'"\r\n                                    ng-options="day as $ctrl.dayDisplay(day) for day in $ctrl.selectOptions.days"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            of\r\n                            <select class="months"\r\n                                    name="yearlySpecificMonthWeekMontMonth"\r\n                                    ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthWeek\'"\r\n                                    ng-change="$ctrl.regenerateCron()"\r\n                                    ng-model="$ctrl.state.yearly.specificMonthWeek.month"\r\n                                    ng-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthWeek\'"\r\n                                    ng-options="month as $ctrl.monthDisplay(month) for month in $ctrl.selectOptions.months"\r\n                                    ng-class="$ctrl.parsedOptions.formSelectClass">\r\n                            </select>\r\n                            at\r\n                            <cron-gen-time-select\r\n                                    is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthWeek\'"\r\n                                    on-change="$ctrl.regenerateCron()"\r\n                                    name-prefix="yearlySpecificMonthWeek"\r\n                                    is-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthWeek\'"\r\n                                    model="$ctrl.state.yearly.specificMonthWeek"\r\n                                    select-class="$ctrl.parsedOptions.formSelectClass"\r\n                                    use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n                                    hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n                            </cron-gen-time-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class="tab-pane"\r\n                         ng-show="!$ctrl.parsedOptions.hideAdvancedTab"\r\n                         ng-class="{\'active\': $ctrl.activeTab === \'advanced\'}">\r\n                        Cron Expression\r\n                        <input type="text"\r\n                               class="advanced-cron-gen-input"\r\n                               name="advancedExpression"\r\n                               ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'advanced\'"\r\n                               ng-change="$ctrl.regenerateCron()"\r\n                               ng-model="$ctrl.state.advanced.expression"\r\n                               ng-required="$ctrl.activeTab === \'advanced\'"\r\n                               ng-class="$ctrl.parsedOptions.formInputClass">\r\n\r\n                        <p>More details about how to create these expressions can be found <a\r\n                                href="http://www.quartz-scheduler.org/documentation/quartz-2.x/tutorials/crontrigger.html"\r\n                                target="_blank">here</a>.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n');}]);