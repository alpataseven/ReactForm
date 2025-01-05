import styled from 'styled-components';

const Input = () => {
    return (
        <StyledWrapper>
            <div className="wave-group">
                <input
                    required
                    type="text"
                    value={formData.task}
                    id="task"
                    name="task"
                    onChange={handleInputChange}
                    className="input" />
                <span className="bar"></span>
                <label className="label">
                    {["N", "a", "m", "e"].map((char, index) => (
                        <span
                            key={index}
                            className="label-char"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {char}
                        </span>
                    ))}
                </label>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .wave-group {
    position: relative;
  }

  .wave-group .input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 200px;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
  }

  .wave-group .input:focus {
    outline: none;
  }

  .wave-group .label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    display: flex;
  }

  .wave-group .label-char {
    transition: 0.2s ease all;
    transition-delay: calc(var(--index) * .05s);
  }

  .wave-group .input:focus ~ label .label-char,
  .wave-group .input:valid ~ label .label-char {
    transform: translateY(-20px);
    font-size: 14px;
    color: #5264AE;
  }

  .wave-group .bar {
    position: relative;
    display: block;
    width: 200px;
  }

  .wave-group .bar:before,.wave-group .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .wave-group .bar:before {
    left: 50%;
  }

  .wave-group .bar:after {
    right: 50%;
  }

  .wave-group .input:focus ~ .bar:before,
  .wave-group .input:focus ~ .bar:after {
    width: 50%;
  }`;

export default Input;
