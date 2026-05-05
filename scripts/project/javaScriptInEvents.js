

const scriptsInEvents = {

	async EventSheet1_Event1_Act1(runtime, localVars)
	{
		"use strict";
		
		const player = runtime.objects.Player.getFirstInstance();
		const kbd = runtime.keyboard;
		
		if (player && kbd) {
		    // Обращаемся к поведению по твоему имени из редактора
		    const p = player.behaviors["Платформер"]; 
		
		    if (p) {
		        const left = kbd.isKeyDown("KeyA") || kbd.isKeyDown("ArrowLeft");
		        const right = kbd.isKeyDown("KeyD") || kbd.isKeyDown("ArrowRight");
		        const jump = kbd.isKeyDown("Space") || kbd.isKeyDown("ArrowUp");
		
		        if (left) p.simulateControl("left");
		        if (right) p.simulateControl("right");
		        if (jump) p.simulateControl("jump");
		    } else {
		        // Если вдруг имя опять не совпадет, это выскочит в консоли (F12)
		        console.error("Код не видит поведение 'Платформер'. Проверь имя в редакторе!");
		    }
		}
	},

	async EventSheet1_Event2_Act1(runtime, localVars)
	{
		// 1. Увеличиваем глобальную переменную (создай её в Event Sheet, если ещё нет!)
		runtime.globalVars.score += 1;
		
		// 2. Безопасный поиск текста
		// Проверь, чтобы в проекте был объект Текст с именем: ScoreText
		const scoreTextObj = runtime.objects["ScoreText"];
		if (scoreTextObj) {
		    const textInst = scoreTextObj.getFirstInstance();
		    if (textInst) {
		        textInst.text = "Счёт: " + runtime.globalVars.score;
		    }
		} else {
		    console.error("ОШИБКА: Объект с именем 'ScoreText' не найден в проекте!");
		}
		
		// 3. Безопасное удаление предмета (Спрайт2)
		// Проверь, чтобы предмет назывался именно так
		const itemObj = runtime.objects["Спрайт2"];
		if (itemObj) {
		    const itemInst = itemObj.getFirstInstance();
		    if (itemInst) {
		        itemInst.destroy();
		    }
		} else {
		    console.warn("Предупреждение: Объект 'Спрайт2' не найден для удаления.");
		}
	},

	async EventSheet1_Event5_Act2(runtime, localVars)
	{
		console.log("Dead")
	},

	async сира_Event9_Act1(runtime, localVars)
	{
		"use strict";
		
		const player = runtime.objects.Player.getFirstInstance();
		const kbd = runtime.keyboard;
		
		if (player && kbd) {
		    // Обращаемся к поведению по твоему имени из редактора
		    const p = player.behaviors["Платформер"]; 
		
		    if (p) {
		        const left = kbd.isKeyDown("KeyA") || kbd.isKeyDown("ArrowLeft");
		        const right = kbd.isKeyDown("KeyD") || kbd.isKeyDown("ArrowRight");
		        const jump = kbd.isKeyDown("Space") || kbd.isKeyDown("ArrowUp");
		
		        if (left) p.simulateControl("left");
		        if (right) p.simulateControl("right");
		        if (jump) p.simulateControl("jump");
		    } else {
		        // Если вдруг имя опять не совпадет, это выскочит в консоли (F12)
		        console.error("Код не видит поведение 'Платформер'. Проверь имя в редакторе!");
		    }
		}
	},

	async арсений_Event7_Act1(runtime, localVars)
	{
		"use strict";
		
		const player = runtime.objects.Player.getFirstInstance();
		const kbd = runtime.keyboard;
		
		if (player && kbd) {
		    // Обращаемся к поведению по твоему имени из редактора
		    const p = player.behaviors["Платформер"]; 
		
		    if (p) {
		        const left = kbd.isKeyDown("KeyA") || kbd.isKeyDown("ArrowLeft");
		        const right = kbd.isKeyDown("KeyD") || kbd.isKeyDown("ArrowRight");
		        const jump = kbd.isKeyDown("Space") || kbd.isKeyDown("ArrowUp");
		
		        if (left) p.simulateControl("left");
		        if (right) p.simulateControl("right");
		        if (jump) p.simulateControl("jump");
		    } else {
		        // Если вдруг имя опять не совпадет, это выскочит в консоли (F12)
		        console.error("Код не видит поведение 'Платформер'. Проверь имя в редакторе!");
		    }
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
