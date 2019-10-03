import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, UpdateDateColumn } from 'typeorm';

import { Guild } from './Guild';
import { Rank } from './Rank';
import { RolePermission } from './RolePermission';

@Entity()
export class Role {
	@Column({ length: 32, primary: true })
	public id: string;

	@CreateDateColumn()
	public createdAt: Date;

	@UpdateDateColumn()
	public updatedAt: Date;

	@Column()
	public name: string;

	@Column({ length: 7 })
	public color: string;

	@Column({ length: 32, nullable: false })
	public guildId: string;

	@ManyToOne(type => Guild, g => g.roles, { nullable: false })
	public guild: Guild;

	@OneToMany(type => Rank, r => r.guild)
	public ranks: Rank[];

	@OneToMany(type => RolePermission, r => r.role)
	public permissions: RolePermission[];
}
