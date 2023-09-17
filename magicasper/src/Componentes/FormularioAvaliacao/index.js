import './index.css';

const FormularioAvaliacao= ()=>{

  return(
    <form>
      <div className='title-form'>
        <h3>Fórmulário de Opnião</h3>
        <p>Avalie as perguntas abaixo e ajude a comunidade crescrer, lembre que todas essas informações serão usadas para auxiliar futuros alunos.</p>
      </div>
      <div className='questions'>
        <div className='form-group'>
            <label for="q1">Didática do professor</label><br></br>
            <div className='lista-form'>
              <div className='item'>
                <input type="radio" id="desorganizada" name="didatica" value="desorganizada"/>
                <label  className='resposta' for="desorganizada">desorganizada</label>
              </div>
              <div className='item'>
                <input type="radio" id="monótona" name="didatica" value="monótona"/>
                <label  className='resposta' for="monótona">monótona</label>
              </div>
              <div className='item'>
                <input type="radio" id="adaptável" name="didatica" value="adaptável"/>
                <label  className='resposta' for="monótona">adaptável</label>
              </div>
              <div className='item'>
                <input type="radio" id="clara" name="didatica" value="clara"/>
                <label  className='resposta' for="clara">clara</label>
              </div>
              <div className='item'>
                <input type="radio" id="envolvente" name="didatica" value="envolvente"/>
                <label  className='resposta' for="envolvente">envolvente</label>
              </div>
            </div>
        </div>
        <div className='form-group'>
            <label for="q1">Quanto tempo de dedicação a disciplina necessita?</label><br></br>
            <div className='lista-form'>
              <div className='item'>
                <input type="radio" id="baixo" name="tempo" value="baixo"/>
                <label  className='resposta' for="baixo"> baixo</label>
              </div>
              <div className='item'>
                <input type="radio" id="médio" name="tempo" value="médio"/>
                <label  className='resposta' for="médio"> médio</label>
              </div>
              <div className='item'>
                <input type="radio" id="alto" name="tempo" value="alto"/>
                <label  className='resposta' for="alto"> alto</label>
              </div>
            </div>
        </div>
        <div className='form-group'>
            <label for="q1">Professor cobra presença?</label><br></br>
            <div className='lista-form'>
              <div className='item'>
                <input type="radio" id="sim" name="tempo" value="sim"/>
                <label  className='resposta' for="sim"> sim</label>
              </div>
              <div className='item'>
                <input type="radio" id="ás vezes" name="tempo" value="ás vezes"/>
                <label  className='resposta' for="ás vezes"> ás vezes</label>
              </div>
              <div className='item'>
                <input type="radio" id="não" name="tempo" value="não"/>
                <label  className='resposta' for="não"> não</label>
              </div>
            </div>
        </div>

        <div className='form-group'>
            <label for="q1">Métodos de avaliação</label><br></br>
            <div className='lista-form'>
              <div className='item'>
                <input type="radio" id="desconexo" name="avaliacao" value="desconexo"/>
                <label  className='resposta' for="desconexo">desconexo</label>
              </div>
              <div className='item'>
                <input type="radio" id="limitado" name="avaliacao" value="limitado"/>
                <label  className='resposta' for="limitado">limitado</label>
              </div>
              <div className='item'>
                <input type="radio" id="adaptável" name="avaliacao" value="adaptável"/>
                <label  className='resposta' for="monótona">adaptável</label>
              </div>
              <div className='item'>
                <input type="radio" id="justo" name="avaliacao" value="justo"/>
                <label  className='resposta' for="justo">justo</label>
              </div>
              <div className='item'>
                <input type="radio" id="formativo" name="avaliacao" value="formativo"/>
                <label  className='resposta' for="formativo">formativo</label>
              </div>
              <div className='item'>
                <input type="radio" id="abrangente" name="avaliacao" value="abrangente"/>
                <label  className='resposta' for="abrangente">abrangente</label>
              </div>
            </div>
        </div>
        <div className='form-group'>
            <label for="q1">Em qual periodo  é recomendável pagar essa disciplina? </label><br></br>
            <select className='dropbox' name="periodo" id="periodo" label='periodo' required>
              <optgroup className='dropbox' label="periodo">
                <option value="1">1ª</option>
                <option value="2">2ª</option>
                <option value="3">3ª</option>
              </optgroup>
            </select>
        </div>
      </div>
    
      <div className='btn-form'>
        <button type='submit'>Enviar</button>
      </div>
    </form>
  )
}

export default FormularioAvaliacao;