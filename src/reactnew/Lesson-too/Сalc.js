
import { useEffect, useMemo, useState } from "react";

function Calculator() {
    const [number, setNumber] = useState(2);
    const [renderCount, setRenderCount] = useState(0);

    // Тяжелое вычисление (умножение на 1000 + случайное число)
    const computedValue = useMemo(() => {
        console.log('🔢 ВЫЧИСЛЯЮ заново...');
        const start = performance.now();
        
        // Имитация тяжелых вычислений
        let result = number;
        for (let i = 0; i < 1000000; i++) {
            result += 0.000001;
        }
        
        const end = performance.now();
        console.log(`⏱️ Вычисление заняло: ${(end - start).toFixed(2)}ms`);
        
        return {
            original: number,
            computed: result,
            random: Math.random() // чтобы видеть разницу
        };
    }, [number]);

    return (
        <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
            <h3>Текущее число: {number}</h3>
            
            {/* ✅ ВЫВОДИМ результаты вычислений */}
            <div style={{background: '#f0f0f0', padding: '10px', margin: '10px'}}>
                <p>Оригинальное: {computedValue.original}</p>
                <p>Вычисленное: {computedValue.computed.toFixed(6)}</p>
                <p>Случайное: {computedValue.random}</p>
            </div>

            <button onClick={() => setNumber(number + 1)}>
                Изменить число (пересчитает)
            </button>
            
            <button onClick={() => setRenderCount(renderCount + 1)}>
                Перерендерить (count = {renderCount}) - НЕ пересчитает
            </button>
        </div>
    );
}


export default Calculator;