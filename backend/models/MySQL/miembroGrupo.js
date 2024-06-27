import { connectionMySQL } from '../../helpers/connectionMySQL.js'

export class MiembroGrupoModel {
  static async obtenerTodosLosMiembrosGrupo (idGrupo) {
    const [miembrosGrupo] = await connectionMySQL.query('select grupo.id_Grupo as "ID Grupo", grupo.Nombre as "Nombre grupo", usuario.Nombre from miembro_grupo INNER JOIN grupo ON miembro_grupo.id_Grupo = grupo.id_Grupo INNER JOIN usuario ON miembro_grupo.id_Usuario = usuario.id where miembro_grupo.id_Grupo = ?', [idGrupo])

    return miembrosGrupo
  }

  static async obtenerMiembroGrupoPorId (idMiembroGrupo) {
    const [miembroGrupo] = await connectionMySQL.query('select id_Grupo from miembro_grupo where id_Usuario = ?;', [idMiembroGrupo])
    if (miembroGrupo.length === 0) return false

    return miembroGrupo
  }

  static async obtenerMiembroGrupoPorIdUsuario ({ entrada }) {
    const {
      id_Grupo: id_Grupo, id_Usuario: id_Usuario
    } = entrada
    const [miembroGrupo] = await connectionMySQL.query('select id_Miembro_Grupo, id_Grupo, id_Usuario from miembro_grupo where id_Grupo = ? and id_Usuario = ?;', [id_Grupo, id_Usuario])

    if (miembroGrupo.length === 0) return false

    return miembroGrupo[1]
  }

  static async crearMiembroGrupo ({ entrada }) {
    const {
      id_Grupo: idGrupo, id_Usuario: idUsuario
    } = entrada

    try {
      await connectionMySQL.query('insert into miembro_grupo (id_Grupo, id_Usuario) values(?, ?)', [idGrupo, idUsuario])
    } catch (error) {
      throw new Error(error)
    }

    return 'Miembro grupo creado con éxito'
  }

  static async eliminarMiembroGrupo (idMiembroGrupo) {
    try {
      await connectionMySQL.query('delete from miembro_grupo where id_Miembro_Grupo = ?', [idMiembroGrupo])
    } catch (error) {
      throw new Error(error)
    }

    return 'Miembro grupo eliminado con éxito'
  }
}
