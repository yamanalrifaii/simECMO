import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'jquery-knob';
import '../../css/Blender.css';

function Blender1({ top, left }) {
    const knobRef = useRef(null);
    const [fdo2, setFdo2] = useState(0.70);
    const [sweep, setSweep] = useState(5);

    useEffect(() => {
        const $knob = $(knobRef.current);
        $knob.knob({
            min: 0,
            max: 100,
            width: 130,
            height: 130,
            fgColor: '#991b1b',
            bgColor: '#ecf0f1',
            thickness: 0.2,
            angleOffset: -125,
            angleArc: 250,
            step: 1,
            displayInput: false,
            change: function(value) {
                setFdo2(value / 100);
            },
            draw: function() {
                this.cursorExt = 1;
                this.g.lineWidth = 3;
                this.o.cursor = true;

                const labels = [0.00, 0.21, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1.00];
                const valueIndex = labels.findIndex(label => label >= this.cv / 100);
                const lowerLabel = labels[Math.max(0, valueIndex - 1)];
                const upperLabel = labels[valueIndex];
                const valueFraction = (this.cv / 100 - lowerLabel) / (upperLabel - lowerLabel);
                const lowerIndex = Math.max(0, valueIndex - 1);
                const upperIndex = valueIndex;
                
                const getAngleForIndex = (index) => this.startAngle + (index / (labels.length - 1)) * this.angleArc;
                const lowerAngle = getAngleForIndex(lowerIndex);
                const upperAngle = getAngleForIndex(upperIndex);
                const valueAngle = lowerAngle + (upperAngle - lowerAngle) * valueFraction;

                // Foreground arc
                this.g.beginPath();
                this.g.strokeStyle = '#991b1b';
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, this.startAngle, valueAngle);
                this.g.stroke();

                // Background arc
                this.g.beginPath();
                this.g.strokeStyle = '#ecf0f1';
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, valueAngle, this.endAngle);
                this.g.stroke();

                // Draw pointer/arrow
                const x1 = this.xy + (this.radius - 20) * Math.cos(valueAngle);
                const y1 = this.xy + (this.radius - 20) * Math.sin(valueAngle);
                const x2 = this.xy + this.radius * Math.cos(valueAngle);
                const y2 = this.xy + this.radius * Math.sin(valueAngle);
                this.g.beginPath();
                this.g.moveTo(x1, y1);
                this.g.lineTo(x2, y2);
                this.g.strokeStyle = '#e74c3c';
                this.g.lineWidth = 2;
                this.g.stroke();

                // Draw value labels and indicator lines
                labels.forEach((label, index) => {
                    const labelAngle = getAngleForIndex(index);
                    
                    // Draw indicator line
                    const innerX = this.xy + (this.radius - 25) * Math.cos(labelAngle);
                    const innerY = this.xy + (this.radius - 25) * Math.sin(labelAngle);
                    const outerX = this.xy + this.radius * Math.cos(labelAngle);
                    const outerY = this.xy + this.radius * Math.sin(labelAngle);
                    this.g.beginPath();
                    this.g.moveTo(innerX, innerY);
                    this.g.lineTo(outerX, outerY);
                    this.g.strokeStyle = '#000';
                    this.g.lineWidth = 1;
                    this.g.stroke();

                    // Draw label
                    const labelX = this.xy + (this.radius - 40) * Math.cos(labelAngle);
                    const labelY = this.xy + (this.radius - 40) * Math.sin(labelAngle);
                    this.g.fillStyle = '#000';
                    this.g.font = '8px Arial';
                    this.g.fillText(label.toFixed(2), labelX - 10, labelY + 3);
                });
            }
        });

        return () => {
            $knob.knob('destroy');
        };
    }, []);

    const handleSweepChange = (increment) => {
        setSweep(prevSweep => {
            const newValue = Math.round((prevSweep + increment) * 2) / 2;
            return Math.max(0, Math.min(10, newValue));
        });
    };

    const sweepHeight = `${(sweep / 10) * 100}%`;

    return (
        <div className="blender-container bg-white p-2 rounded-lg shadow-md" 
            style={{ 
                width: '220px', 
                fontSize: '14px', 
                position: 'absolute', 
                zIndex: 10 // to ensure it's above the SVG
                }}>            
            <div className='text-dark-grey text-sm font-bold mb-2 text-center'>Air-Oxygen Blender</div>
            <div className="blender-controls flex justify-between">
                <div className="control-group">
                    <div>FdO2</div>
                    <div className="fdo2-control">
                        <input 
                            ref={knobRef} 
                            value={Math.round(fdo2 * 100)} 
                            onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                setFdo2(value / 100);
                            }}
                        />
                    </div>
                </div>
                <div className="control-group">
                    <div>Sweep</div>
                    <div className="sweep-control">
                        <div className="progress-bar h-20 w-4">
                            <div className="progress bg-red" style={{height: sweepHeight}}></div>
                        </div>
                        <div className="button-group">
                            <button onClick={() => handleSweepChange(-0.5)}>-</button>
                            <button onClick={() => handleSweepChange(0.5)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="value-displays flex justify-between text-m">
                <div className="lcd-display">FdO2: {fdo2.toFixed(2)}</div>
                <div className="lcd-display">Sweep: {sweep.toFixed(1)}</div>
            </div>
        </div>
    );
}

export default Blender1;